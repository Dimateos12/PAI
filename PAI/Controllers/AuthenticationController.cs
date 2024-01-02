using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using PAI.Data.Models;

namespace PAI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly IConfiguration _configuration;


    public AuthenticationController(

        UserManager<User> userManager,
        IConfiguration configuration
    )
    {
        _userManager= userManager;
        _configuration= configuration;
       
    }

    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> Register([FromBody] RegistrationRequestDTO requestDTO)
    {
        if (ModelState.IsValid)
        {
            var user_exist = await _userManager.FindByEmailAsync(requestDTO.Email);
            //if (user_exist != null) {
            //    return BadRequest();
            //}

            // create a user
            var new_user = new User()
            {
                Email = requestDTO.Email,
                UserName = requestDTO.Email,
                FirstName= requestDTO.FirstName,
                LastName= requestDTO.LastName

            };

            var is_created = await _userManager.CreateAsync(new_user, requestDTO.Password);

            if (is_created.Succeeded)
            {
                //Generate token 
                var token = GenerateJwtToken(new_user);
                    
                return Ok(new AuthResult()
                {
                    Result = true,
                    Token = token
                });
            }
            return BadRequest(new AuthResult()
            {
                Errors = new List<string>()
                {
                    "Server error"
                },
                Result = false
            });
        }

        return BadRequest();
    }
    
    [Route("Login")]
    [HttpPost]
    public async Task<IActionResult> Login([FromBody] LoginRequestDTO loginRequest)
    {
        if (ModelState.IsValid) {

            var exitisng_usser = await _userManager.FindByEmailAsync(loginRequest.Email);

            if (exitisng_usser == null) {
                return BadRequest(new AuthResult()
                {
                    Errors = new List<string>() {
                        "Invalid payload"
                    },
                    Result = false


                });
            }

            var isCorrect = await _userManager.CheckPasswordAsync(exitisng_usser, loginRequest.Password);


            if (!isCorrect)
            {
                return BadRequest(new AuthResult()
                {
                    Errors = new List<string>() {
                        "Invalid credentials"
                    },
                    Result = false


                });
            }
            var jwtToken = GenerateJwtToken(exitisng_usser);
            return Ok(new AuthResult()
            {
                Token = jwtToken,
                Result = true
            });
        }

        return BadRequest(new AuthResult()
        {
            Errors = new List<string>() {
                "Invalid payload"
            },
            Result = false


        });
    }
   
    private string GenerateJwtToken(User user)
    {
        var jwtTokenHandler = new JwtSecurityTokenHandler();

        var key = Encoding.UTF8.GetBytes(_configuration.GetSection("JwtConfig:Secret").Value);
      
        // Token descriptior
        var tokenDescriptor = new SecurityTokenDescriptor()
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("Id", user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Email,user.Email),
                new Claim(JwtRegisteredClaimNames.FamilyName,user.LastName),
                new Claim(JwtRegisteredClaimNames.GivenName,user.FirstName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToUniversalTime().ToString())
            }),
         
            Expires = DateTime.Now.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        };

        var token = jwtTokenHandler.CreateToken(tokenDescriptor);
        var jwtToken = jwtTokenHandler.WriteToken(token);

        return jwtToken;
    }
    
}
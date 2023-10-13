using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;

namespace PAI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly UserManager<IdentityUser> _userManager;

    public AuthenticationController(IConfiguration configuration,
        UserManager<IdentityUser> userManager)
    {
        _configuration = configuration;
        _userManager = userManager;
    }

    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> Register([FromBody] RegistrationRequestDTO request)
    {
        //TODO
        return  Ok();

    }
    
    
}
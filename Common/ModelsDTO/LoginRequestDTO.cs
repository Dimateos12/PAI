using System.ComponentModel.DataAnnotations;

namespace PAI.Common.ModelsDTO;

public class LoginRequestDTO
{
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }

}
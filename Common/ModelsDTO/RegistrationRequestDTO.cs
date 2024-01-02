﻿using System.ComponentModel.DataAnnotations;

namespace PAI.Common.ModelsDTO;

public class RegistrationRequestDTO
{
    [Required]
    public string FirstName { get; set; }
    
    [Required]
    public string LastName { get; set; }

    [Required]
    public string Name { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}
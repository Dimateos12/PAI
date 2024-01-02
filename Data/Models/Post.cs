using PAI.Common.Enums;

namespace PAI.Data.Models;

public class Post : InfoBaseEntity
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public int Category { get; set; }
    public bool IsActive { get; set; }
    public int UserId { get; set; } 
    public string Image { get; set; }
    public bool IsFeatured { get; set; } 
}
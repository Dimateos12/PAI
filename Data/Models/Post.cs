using PAI.Common.Enums;

namespace PAI.Data.Models;

public class Post
{
    public int Id { get; set; }
    public string Body { get; set; }
    public CategoryEnum Category { get; set; }
    public bool IsActive { get; set; }
    public int UserId { get; set; } 
}
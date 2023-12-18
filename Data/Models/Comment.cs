namespace PAI.Data.Models;

public class Comment : InfoBaseEntity
{
    public int Id { get; set; }
    public string Body { get; set; }
    public bool IsActive { get; set; }
    public int CommentId { get; set; }
    public int UserId { get; set; }
}
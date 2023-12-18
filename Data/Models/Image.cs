namespace PAI.Data.Models;

public class Image : InfoBaseEntity
{
    public int Id { get; set; }
    public string filePath { get; set; }
    public string fileName { get; set; }
    public string author { get; set; } = "Mateusz Jabłoński";
    public string? description { get; set; }
    public int displaySequence { get; set; }
}
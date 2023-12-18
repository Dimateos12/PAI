using Microsoft.AspNetCore.Http;

namespace PAI.Common.ModelsDTO;


public class ImageDTO
{
    public IFormFile File { get; set; }
}
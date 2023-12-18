using System.Net.Mime;
using AutoMapper;
using PAI.Common.ModelsDTO;
using PAI.Data;
using PAI.Data.Models;

namespace PAI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;
[Route("api/[controller]")]
[ApiController]
public class ImagesController : ControllerBase
{
    private readonly PAIDbContext _context;
    private readonly IWebHostEnvironment _hostEnvironment;
    private readonly IMapper _mapper;
    public ImagesController(PAIDbContext context, IWebHostEnvironment hostEnvironment, IMapper mapper)
    {
        _context = context;
        _hostEnvironment = hostEnvironment;
        _mapper = mapper;
    }

    [Route("/api/imageAdd")]
    [HttpPost]
    public async Task<IActionResult> AddImage([FromForm] ImageDTO imageDto)
    {
        if (imageDto.File == null || imageDto.File.Length == 0)
        {
            return BadRequest("Nieprawidłowy plik obrazu.");
        }

        var FileName = $"{Guid.NewGuid().ToString()}_{imageDto.File.FileName}";
        var galleryFolder = Path.Combine(_hostEnvironment.WebRootPath, "GalleryImages");
        var filePath = Path.Combine(galleryFolder, FileName);

        using (var stream = new FileStream(filePath,FileMode.Create))
        {
            await imageDto.File.CopyToAsync(stream);
        }

        var newImage = new Image
        {
            fileName = FileName,
            filePath = $"/GalleryImages/{FileName}",
            displaySequence = _context.Images.ToList().Count + 1,
            author = "Mateusz Jabłoński"
         
        };

        _context.Images.Add(newImage);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [Route("/api/getGallery")]
    [HttpGet]
    public IActionResult GetGallery()
    {
        var gallery = _context.Images.ToList();
        return Ok(gallery);
    }

    [Route("/api/editGallery")]
    [HttpPut]
    public async Task<IActionResult> EditGallery([FromBody] List<Image> imageDTOList)
    {
        if (imageDTOList == null || !imageDTOList.Any())
        {
            return BadRequest("Przekazana lista modeli ImageDTO jest pusta lub null.");
        }

        foreach (var imageDTO in imageDTOList)
        {
            Image img = _mapper.Map<Image>(imageDTO);
            _context.Images.Update(img);
            await _context.SaveChangesAsync();
        }

        return Ok("Edycja galerii zakończona pomyślnie.");
    }
    
}
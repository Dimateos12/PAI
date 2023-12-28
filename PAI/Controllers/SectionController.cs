using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Services.Interfaces;

namespace PAI.Controllers;

[Route("api/Section")]
[ApiController]
public class SectionController
{
    private readonly ISectionService _sectionService;

    public SectionController(ISectionService sectionService)
    {
        _sectionService = sectionService;
    }
    
    [HttpPost]
    public async Task<ResponseDTO<Sections>> AddSection(Sections model)
    {
        return await _sectionService.Add(model);
    }

    [HttpGet]
    public async Task<ResponseDTO<List<Sections>>> GetSection()
    {
        return await _sectionService.GetList();
    }
}
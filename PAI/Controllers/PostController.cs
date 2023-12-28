using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Services.Interfaces;

namespace PAI.Controllers;

[Route("api/Post")]
[ApiController]
public class PostController
{
    private readonly IPostService _postService;


    public PostController(IPostService postService)
    {
        _postService = postService;
    }
    
    [HttpPost]
    public async Task<ResponseDTO<Post>> AddSection(Post model)
    {
        return await _postService.Add(model);
    }

    [HttpGet]
    public async Task<ResponseDTO<List<Post>>> GetSection()
    {
        return await _postService.GetList();
    }
}
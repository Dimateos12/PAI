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
    
    [HttpGet]
    [Route("featured")]
    public async Task<Post?> GetFeatured()
    {
        return await _postService.GetFeatured();
    }
    [HttpGet]
    [Route("{id:int}")]
    public async Task<List<Post>> GetSectionsPost(int id)
    {
        return await _postService.GetSectionsPost(id);
    }

    [HttpGet]
    [Route("get/{id:int}")]
    public async Task<Post> GetPostById(int id)
    {
        return await _postService.GetPostById(id);
    }
}
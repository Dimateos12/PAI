using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Controllers;

[Route("api/Post")]
[ApiController]
public class PostController
{
    private readonly IPostService _postService;
    private readonly IGenericRepository<Post, int> _postRepository;

    public PostController(IPostService postService, IGenericRepository<Post, int> postRepository)
    {
        _postService = postService;
        _postRepository = postRepository; 
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

    [HttpGet]
    [Route("toAccept")]
    public  async Task<List<Post>> GetAcceptPost()
    {
        return await _postService.GetAcceptPost();
    }

    [HttpPut]
    [Route("{id:int}")]
    public  Task<ResponseDTO<PostDTO>> EditPost([FromBody] PostDTO model)
    {
        return  _postService.Edit(model, model.Id);
    }

    [HttpGet]
    [Route("getByUser/{id:int}")]
    public ResponseDTO<List<Post>> GetPostByUser(int id)
    {
        return _postService.GetPostByUser(id);
    }
}
using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Services.Interfaces;

namespace PAI.Controllers;

[Route("api/Comment")]
[ApiController]
public class CommentController
{
    private readonly ICommentService _commentService;

    public CommentController(ICommentService commentService)
    {
        _commentService = commentService;
    }

    [HttpPost]
    public async Task<ResponseDTO<Comment>> Add(Comment model)
    {
        return await _commentService.Add(model);
    }

    [HttpGet]
    public async Task<ResponseDTO<List<Comment>>>Get()
    {
        return await _commentService.GetList();
    }
}
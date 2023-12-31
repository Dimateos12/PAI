﻿using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Controllers;

[Route("api/Comment")]
[ApiController]
public class CommentController
{
    private readonly ICommentService _commentService;
    private readonly IGenericRepository<Comment, int> _repository;
    public CommentController(ICommentService commentService, IGenericRepository<Comment, int> repository)
    {
        _commentService = commentService;
        _repository = repository;
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

    [HttpGet]
    [Route("get/{id:int}")]
    public async Task<ResponseDTO<Comment>> GetById(int id)
    {
        var obj  = _repository.GetByIdAsync(id);
        return new ResponseDTO<Comment> { data = await obj };
       
         
    }

    [HttpGet]
    [Route("getListByPost/{id:int}")]
    public async Task<ResponseDTO<List<Comment>>> GetByIdPost(int id)
    {
        var obj = _repository.GetAll().Where(x => x.PostId == id).ToList();
        return new ResponseDTO<List<Comment>> { data = obj };



    }


}
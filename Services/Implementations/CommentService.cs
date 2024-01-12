using AutoMapper;
using Microsoft.AspNetCore.Identity;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Services.Implementations;

public class CommentService : GenericService<Comment,int,Comment,int>, ICommentService
{
    private readonly IGenericRepository<Comment, int> _commentRepository;
    private readonly IMapper _mapper;
    private readonly UserManager<User> _userManager;
    
    public CommentService(UserManager<User> userManager, IGenericRepository<Comment, int> repository, IGenericRepository<Comment, int> repositoryView, IMapper mapper) : base(repository, repositoryView, mapper)
    {
        _commentRepository = repository;
        _mapper = mapper;
        _userManager = userManager;
    }

    public ResponseDTO<List<CommentDTO>> GetListByIdPost(int id)
    {
        var obj = _commentRepository.GetAll().Where(x => x.PostId == id).ToList();
        List<CommentDTO> respons = new List<CommentDTO>();
        List<User> users = _userManager.Users.ToList();

        foreach (var item in obj)
        {
            CommentDTO comment = _mapper.Map<CommentDTO>(item);
            comment.UserName = users.Find(x => x.NormalId == comment.UserId).FirstName;
            respons.Add(comment);
        }

        return new ResponseDTO<List<CommentDTO>>()
        {
            data = respons
        };
    }

    public ResponseDTO<List<Comment>> GetCommentToAccept()
    {
        List<Comment> obj = _commentRepository.GetAll().Where(x=>x.IsActive == false).ToList();
        
        return new ResponseDTO<List<Comment>>()
        {
            data = obj
        };
    }
}
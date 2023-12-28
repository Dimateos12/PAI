using AutoMapper;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Services.Implementations;

public class CommentService : GenericService<Comment,int,Comment,int>
{
    private readonly IGenericRepository<Comment, int> _commentRepository;
    private readonly IMapper _mapper;
    
    public CommentService(IGenericRepository<Comment, int> repository, IGenericRepository<Comment, int> repositoryView, IMapper mapper) : base(repository, repositoryView, mapper)
    {
        _commentRepository = repository;
        _mapper = mapper;
    }
}
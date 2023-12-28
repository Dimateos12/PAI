using AutoMapper;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Services.Implementations;

public class PostService : GenericService<Post, int, Post, int>, IPostService
{
    private readonly IGenericRepository<Post, int> _postRepository;
    private readonly IMapper _mapper;
    
    public PostService(IGenericRepository<Post, int> repository, IGenericRepository<Post, int> repositoryView, IMapper mapper) : base(repository, repositoryView, mapper)
    {
        _postRepository = repository;
        _mapper = mapper;
    }
}
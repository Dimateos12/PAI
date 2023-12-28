using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PAI.Common.ModelsDTO;
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

    public async Task<Post?> GetFeatured()
    {
        return await _postRepository.Find(x => x.IsFeatured == true).FirstOrDefaultAsync();
    }
}
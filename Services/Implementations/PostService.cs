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
    public async Task<List<Post>> GetSectionsPost(int id)
    {
        return await _postRepository.Find(x => x.Category == id).ToListAsync();
    }

    public async Task<Post> GetPostById(int id)
    {
        return await _postRepository.GetByIdAsync(id);
    }

    public async Task<List<Post>> GetAcceptPost()
    {
        return await _postRepository.GetAll().Where(x => x.IsActive == false).ToListAsync();
   
    }

    public ResponseDTO<List<Post>> GetPostToAccept()
    {
        List<Post> obj = _postRepository.GetAll().Where(x => x.IsActive == false).ToList();

        return new ResponseDTO<List<Post>>()
        {
            data = obj
        };
    }

    public  ResponseDTO<List<Post>> GetPostByUser(int id)
    {
        List<Post> obj =  _postRepository.GetAll().Where(x => x.UserId == id).ToList();

        return new ResponseDTO<List<Post>>()
        {
            data = obj
        };
    }


}
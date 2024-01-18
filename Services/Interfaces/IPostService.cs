using PAI.Data.Models;

namespace PAI.Services.Interfaces;

public interface IPostService : IGenericService<Post, int, Post, int>
{
    public Task<Post?> GetFeatured();
    public Task<List<Post>> GetSectionsPost(int id);
    public Task<Post> GetPostById(int id);
    public Task<List<Post>> GetAcceptPost();


}
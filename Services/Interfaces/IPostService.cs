using PAI.Data.Models;

namespace PAI.Services.Interfaces;

public interface IPostService : IGenericService<Post, int, Post, int>
{
    public Task<Post?> GetFeatured();

}
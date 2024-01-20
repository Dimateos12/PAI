using PAI.Common.ModelsDTO;
namespace PAI.Services.Interfaces
{
    public interface IGenericService<TEntity, TKey, TViewEntity, TViewKey>
        where TEntity : class
        where TViewEntity : class
    {
        Task<ResponseDTO<TDTO>> Add<TDTO>(TDTO model);
        Task<ResponseDTO<List<TEntity>>> GetList();

        Task<ResponseDTO<TDTO>> Edit<TDTO>(TDTO model, TKey id);



    }
}
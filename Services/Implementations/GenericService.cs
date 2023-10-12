using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Services.Implementations;

public abstract class GenericService<TEntity, TKey, TViewEntity, TViewKey> : IGenericService<TEntity, TKey, TViewEntity, TViewKey>
    where TEntity : class
    where TViewEntity : class
{

    private readonly IGenericRepository<TEntity, TKey> _repository;
    private readonly IGenericRepository<TViewEntity, TViewKey> _repositoryView;
    

    public GenericService(IGenericRepository<TEntity, TKey> repository,
        IGenericRepository<TViewEntity, TViewKey> repositoryView
    )
    {
        _repository = repository;
        _repositoryView = repositoryView;
    }

    public async Task<ResponseDTO<TDTO>> Add<TDTO>(TDTO model)
    {

        var newObject = await _repository.AddAsync(_mapper.Map<TEntity>(model));

        return new ResponseDTO<TDTO>
        {

            data = _mapper.Map<TDTO>(newObject)

        };
    }

}
using AutoMapper;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;
using PAI.Common.ModelsDTO;
namespace PAI.Services.Implementations;

public abstract class GenericService<TEntity, TKey, TViewEntity, TViewKey> : IGenericService<TEntity, TKey, TViewEntity, TViewKey>
    where TEntity : class
    where TViewEntity : class
{

    private readonly IGenericRepository<TEntity, TKey> _repository;
    private readonly IGenericRepository<TViewEntity, TViewKey> _repositoryView;
    private readonly IMapper _mapper;

    public GenericService(IGenericRepository<TEntity, TKey> repository,
        IGenericRepository<TViewEntity, TViewKey> repositoryView,
        IMapper mapper
    )
    {
        _repository = repository;
        _repositoryView = repositoryView;
        _mapper = mapper;
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
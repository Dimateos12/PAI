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
    public async Task<ResponseDTO<List<TEntity>>> GetList()
    {
        var list =  _repository.GetAll().ToList();

        return new ResponseDTO<List<TEntity>>
        {
            data = list
        };
    }

    public async Task<ResponseDTO<TDTO>> GetById<TDTO>(TKey id)
    {
        var obj = await _repository.GetByIdAsync(id);
        var data = _mapper.Map<TDTO>(obj);
        return new ResponseDTO<TDTO>
        {
            data = data
        };
    }

    public async Task<ResponseDTO<TDTO>> Edit<TDTO>(TDTO model, TKey id)
    {
        var dbObjt = await _repository.GetByIdAsync(id);
        dbObjt = _mapper.Map(model, dbObjt);

        var ent = await _repository.UpdateAsync(dbObjt);

        return new ResponseDTO<TDTO>
        {
            data = _mapper.Map<TDTO>(ent)
        };
    }


}
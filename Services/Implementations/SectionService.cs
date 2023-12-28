using AutoMapper;
using Microsoft.AspNetCore.Identity;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Services.Implementations;

public class SectionService : GenericService<Sections, int, Sections, int>, ISectionService
{
    private readonly IGenericRepository<Sections, int> _sectionRepository;
    private readonly IMapper _mapper;
    
    public SectionService(IGenericRepository<Sections, int> repository, IGenericRepository<Sections, int> repositoryView, IMapper mapper) : base(repository, repositoryView, mapper)
    {
        _sectionRepository = repository;
        _mapper = mapper;
    }
    
    
    
}
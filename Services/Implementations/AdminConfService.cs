using AutoMapper;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PAI.Services.Implementations
{
    public class AdminConfService : GenericService<AdminConf, int, AdminConf, int>, IAdminConfService
    {
        private readonly IGenericRepository<AdminConf, int>  _adminConfRepository;  
        public AdminConfService(IGenericRepository<AdminConf, int> repository, IGenericRepository<AdminConf, int> repositoryView, IMapper mapper) : base(repository, repositoryView, mapper)
        {
            _adminConfRepository= repository;
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;

namespace PAI.Controllers
{
    [Route("api/Admin")]
    [ApiController]
    public class AdminConfController
    {
      
        private readonly IGenericRepository<AdminConf, int> _adminRepository;
        private readonly IAdminConfService _adminConfService;
        public AdminConfController(IGenericRepository<AdminConf, int> adminRepository, IAdminConfService adminConfService)
        {
            _adminRepository = adminRepository;
            _adminConfService = adminConfService;
        }

        [HttpPost]
        public async Task<ResponseDTO<AdminConf>> Add(AdminConf model)
        {
            return await _adminConfService.Add(model);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<AdminConf> GetPostById(int id)
        {
            return await _adminRepository.GetByIdAsync(id);
        }

        [HttpPut]
        [Route("{id:int}")]
        public Task<ResponseDTO<AdminConf>> EditPost([FromBody] AdminConf model)
        {
            return _adminConfService.Edit(model, model.Id);
        }
    }
}

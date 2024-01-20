using PAI.Common.ModelsDTO;
using PAI.Data.Models;
using PAI.Repository.Interfaces;
using PAI.Services.Interfaces;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;


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

        [HttpPost]
        [Route("PayU")]
        public async Task<ActionResult> PayU([FromBody] PayUModel payUModel)
        {
            var apiUrl = "https://secure.snd.payu.com/api/v2_1/orders";
            var accessToken = "d9a4536e-62ba-4f60-8017-6053211d3f47";

            var orderData = new
            {
                notifyUrl = "https://your.eshop.com/notify",
                customerIp = "127.0.0.1",
                merchantPosId = "300746",
                description = "Premium na stronie Forum Dyskusyjne",
                currencyCode = "PLN",
                totalAmount = "21000",
                buyer = new
                {
                    email = payUModel.Mail,
                    phone = "",
                    firstName = payUModel.FirstName,
                    lastName = payUModel.LastName,
                    language = "pl"
                },
                products = new[]
                {
                new { name = "Konto premium ", unitPrice = "21000", quantity = "1" },
    
            }
            };

            using (var httpClient = new HttpClient())
            {
                var orderJson = Newtonsoft.Json.JsonConvert.SerializeObject(orderData);
                var content = new StringContent(orderJson, Encoding.UTF8, "application/json");

                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,
                    RequestUri = new Uri(apiUrl),
                    Content = content
                };

                request.Headers.Add("Authorization", $"Bearer {accessToken}");

                var response = await httpClient.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    
                    return new OkObjectResult(response);
                }
                else
                {
                    var errorResponse = await response.Content.ReadAsStringAsync();
                    return new BadRequestResult();
                }
            }
            

        }

        [HttpPut]
        [Route("{id:int}")]
        public Task<ResponseDTO<AdminConf>> EditPost([FromBody] AdminConf model)
        {
            return _adminConfService.Edit(model, model.Id);
        }
    }
}

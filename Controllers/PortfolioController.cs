using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace AwesomeCache.Controllers
{
    [ApiController]
    [Route("/portfolio")]
    public class PortfolioController : ControllerBase
    {


        private readonly ILogger<PortfolioController> _logger;
        private static readonly Random rand = new Random();

        public PortfolioController(ILogger<PortfolioController> logger)
        {
            _logger = logger;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var num = rand.Next(3, 7);
            num *= 1000;
            await Task.Delay(num);
            
            return Ok(num);
        }
    }
}

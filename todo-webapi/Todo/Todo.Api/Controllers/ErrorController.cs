using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Todo.Api.Errors;

namespace Todo.Api.Controllers
{
    [Route("/errors")]
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ControllerBase
    {
        [Route("{code}")]
        public IActionResult Error(int code)
        {
            HttpStatusCode parsedCode = (HttpStatusCode)code;
            Error error = new Error(code, parsedCode.ToString(), "Ha ocurrido un error ");

            return Ok(error);
        }
    }
}
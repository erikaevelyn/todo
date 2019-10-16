using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Api.Errors
{
    public class ErrorMessage
    {
        public string Message { get; private set; }

        public ErrorMessage(string message)
        {
            this.Message = message;

        }
    }
}

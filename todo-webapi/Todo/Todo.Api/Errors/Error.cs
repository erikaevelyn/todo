﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Api.Errors
{
    public class Error : ErrorMessage
    {
        public int StatusCode { get; private set; }

        public string StatusDescription { get; private set; }

        public Error(int statusCode, string statusDescription, string message)
            : base(message)
        {
            this.StatusCode = statusCode;
            this.StatusDescription = statusDescription;
        }
    }
}

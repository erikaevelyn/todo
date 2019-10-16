using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Api.Dto
{
    public class UpdateTodoItemDTO
    {
        [Required]
        public string Field { get; set; }
        [Required]
        public string Value { get; set; }

    }
}

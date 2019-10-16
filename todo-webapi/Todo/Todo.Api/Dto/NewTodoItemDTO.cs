using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Api.Dto
{
    public class NewTodoItemDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public bool? IsComplete { get; set; }
    }
}

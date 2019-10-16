using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Todo.Dominio.Entities
{
    public class TodoItem
    {
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool? IsComplete { get; set; }
        public ApplicationUser Responsible { get; set; }
    }
}

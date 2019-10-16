using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todo.Dominio.Entities;
using Todo.Servicio.Contracts;

namespace Todo.Servicio.Implementation
{
    public class TodoService : ITodoService
    {

        private readonly ApplicationDbContext _context;
        private readonly ITodoRepository _todoRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public TodoService(ApplicationDbContext context, ITodoRepository todoRepository, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _todoRepository = todoRepository;
            _userManager = userManager;
        }

        public async Task<TodoItem> GetTodo(long id)
        {
            return await _todoRepository.GetAsync(id);
        }

        

        public async Task PatchTodo(long id, string field, string value)
        {
            var todoItem = await GetTodo(id);
            if (todoItem != null)
            {
                switch (field)
                {
                    case "Name":
                        todoItem.Name = value;
                        break;

                    case "IsCompleted":
                        todoItem.IsComplete = bool.Parse(value);
                        break;

                    case "Responsible":
                        var user = await _userManager.Users.Where(u => u.Id == value).FirstOrDefaultAsync();
                        if (user != null)
                        {
                            todoItem.Responsible = user;
                        }
                        else
                        {
                          throw new System.Exception("El usuario no fue encontrado.");
                        }

                        break;
                }
            }
            await _todoRepository.UpdateAsync(todoItem);


        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Todo.Dominio.Entities;

namespace Todo.Servicio.Contracts
{
    public interface ITodoRepository
    {
        Task<List<TodoItem>> GetAllAsync();
        Task<List<TodoItem>> SearchByNameAsync(string searchString);
        Task<TodoItem> GetAsync(long id);

        Task AddAsync(TodoItem todoItem);
        Task UpdateAsync(TodoItem todoItem);
        Task RemoveAsync(TodoItem todoItem);
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Todo.Servicio.Contracts
{
    public interface ITodoService
    {
        Task PatchTodo(long id, string field, string value);
    }
}

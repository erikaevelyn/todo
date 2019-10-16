using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo.Api.Dto;
using Todo.Api.Errors;
using Todo.Dominio.Entities;
using Todo.Servicio.Contracts;
using AutoMapper;

namespace Todo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ITodoRepository _todoRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITodoService _todoService;
        private readonly IMapper _mapper;

        public TodoItemsController(ApplicationDbContext context, ITodoRepository todoRepository, ITodoService todoService,
            UserManager<ApplicationUser> userManager, IMapper mapper)
        {
            _context = context;
            _todoRepository = todoRepository;
            _userManager = userManager;
            _todoService = todoService;
            _mapper = mapper;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        {
            return await _todoRepository.GetAllAsync();
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
        {
            var todoItem = await _todoRepository.GetAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return Ok(todoItem);
        }

        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            await _todoRepository.UpdateAsync(item);
            return NoContent();
        }


        // PATCH: api/Todo/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchTodoItem(long id, UpdateTodoItemDTO changes)
        {
            switch (changes.Field)
            {
                case "Id":
                    return Forbid();
                case "IsCompleted":
                    await _todoService.PatchTodo(id, changes.Field, changes.Value);
                    break;
                case "Responsible":
                    await _todoService.PatchTodo(id, changes.Field, changes.Value);
                    break;
                default:
                    return BadRequest(new ErrorMessage("Invalid field"));
            }
            return NoContent();
        }

        // POST: api/TodoItems
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TodoItem>> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return todoItem;
        }

        private bool TodoItemExists(long id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}

import ToDoService from '../services/ToDoService';

var toDoService = new ToDoService();

const estadoInicial = {
    taskList: [],
    token: '123'
}
export default function(estadoActual = estadoInicial, action)
{
    switch (action.type) {
        case 'ADD_ITEM':
            var nuevoItem = action.data;
            return {
                taskList: [
                    ...estadoActual.taskList,
                    nuevoItem
                ]
            }
        case 'REMOVE_ITEM':

            break;
        case 'INIT':
            return {
                taskList: action.data
            }
        case 'UPDATE_ITEM':

            break;

        case 'SET_TOKEN':

            break;
        default:
            return {...estadoActual};
    }
}

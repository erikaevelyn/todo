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
            var idItem = action.data;
            const posicion = estadoActual.taskList.findIndex(item => {
                return item.id === idItem;
            })
            return {
                taskList: [
                    ...estadoActual.taskList.slice(0, posicion),
                    ...estadoActual.taskList.slice(posicion+1),
                ]
            }
            return {
                taskList: [
                    ...estadoActual.taskList,
                    nuevoItem
                ]
            }
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

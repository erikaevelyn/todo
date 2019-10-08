import React from 'react';
import axios from 'axios';
import ToDoItem from "./ToDoItem/ToDoItem";

export default class ToDo extends React.Component {

    state = {
        listaTareas: []
    }
    async componentDidMount() {
        var respuesta = await axios.get('https://toodoapi220190926085529.azurewebsites.net/api/TodoItems');
        if (respuesta.status===200) {
            console.log("ok");
        }
        this.setState({listaTareas: respuesta.data});
    }


    render() {

        var lista = this.state.listaTareas.map(item => {
            console.log(this.state.listaTareas.length);
            return (
                    <ToDoItem
                        key={item.id}
                        textoTitle={item.name}/>
            )
        })

        return (
            <div>
                <blockquote className="blockquote">
                    <h2 className="mb-0">Lista de tareas abiertas</h2>
                </blockquote>
                {lista}
            </div>
        );
    }
}

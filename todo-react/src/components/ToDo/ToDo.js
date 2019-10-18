import React from 'react';
import {connect} from 'react-redux';
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoAddItem from "./ToDoAddItem/ToDoAddItem";
import ToDoService from '../../services/ToDoService';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.toDoService = new ToDoService(); // Instancio el servicio
    }

    async componentDidMount() {
        var respuesta = await this.toDoService.getTareas(); // Uso el servicio instanciado
        this.props.onInit(respuesta);
    }


    render() {

        var listado = this.props.listado.map(unItem => {
            return (

                    <ToDoItem
                        key={unItem.id}
                        itemId={unItem.id}
                        textoTitle={unItem.name}/>

            )
        })

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Lista de tareas</h1>
                        <p className="lead">Agrega, modifica y elimina tareas. Asignalas a un responsable que sera notificado por correo
                        electronico.</p>
                    </div>
                </div>
                <ul className="list-group">
                {listado}
                </ul>
                <br/>
                <ToDoAddItem/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listado: state.taskList,
    }
}

const mapActions = (dispatch) => {
    return {
        onInit: (listado) => dispatch({type: 'INIT', data: listado})
    }
}
export default connect(mapStateToProps, mapActions)(ToDo);

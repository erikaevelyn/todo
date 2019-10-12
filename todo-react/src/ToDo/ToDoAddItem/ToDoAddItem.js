import React from 'react';
import ToDoService from '../../services/ToDoService';
import {connect} from "react-redux";

export default class ToDoAddItem extends React.Component {

    constructor(props) {
        super(props);
        this.toDoService = new ToDoService(); // Instancio el servicio
        // Binding
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // Estado (puede ir fuera del constructor también)
        this.state = {
            inputTarea: ''
        }

    }

    addItem() {
        // this.state.inputTarea
        alert('A name was submitted: ' + this.state.inputTarea );
    }

    /**
     * Se actualiza el estado (inputTarea) cada vez que el usuario modifica el input
     * @param {event} e 
     */
    handleChange(e) {
        this.setState({
            inputTarea: e.target.value
        });
    }


    render() {
        return (
            <form>
                <div className="container px-lg-5">
                <div className="row">
                    <div className="col">
                        <input type="form" className="form-control" id="inputTarea" onChange={this.handleChange} value={this.state.inputTarea}
                               />
                        <small className="form-text text-muted">Ingresar la tarea a realizar</small>
                    </div>
                    <div className="col">
                        <select className="form-control" id="responsable">
                            <option value="Erika">Erika</option>
                            <option value="Marcos">Marcos</option>
                            <option value="Brenda">Brenda</option>
                            <option value="Abel">Abel</option>
                            <option value="Angela">Angela</option>
                        </select>
                        <small id="responsable" className="form-text text-muted">Seleccionar un responsable</small>
                    </div>
                    <div className="col">
                        <button onClick={this.addItem} className="btn btn-primary" > <i className="material-icons">
                            note_add
                        </i></button>
                    </div>
                </div>
                </div>
            </form>
        )
    }
}
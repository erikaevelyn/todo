import React from 'react';
import ToDoService from '../../services/ToDoService';
import {connect} from "react-redux";

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.toDoService = new ToDoService();
    }

    deleteItem(id) {
        var parentThis = this;
        this.toDoService.deleteTarea(id)
            .then(function (response) {
                console.log(response);
                parentThis.props.onDel(id);
            })
            .catch(function (error) {
                console.log(error);
            });;
    }


    render() {
        return (
            <div className="container px-lg-5">
                <div className="row">
                    <div className="col">
                        <button type="button"
                                className="list-group-item list-group-item-action">{this.props.itemId} - {this.props.textoTitle}
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger" onClick={this.deleteItem(this.props.itemId)}><i className="material-icons" color="warn">
                            delete_sweep
                        </i></button>
                    </div>
                </div>
            </div>
        );
    }
}

var mapToActions = function(dispatch) {
    return {
        onDel: (id) => dispatch({type: 'REMOVE_ITEM', data: id})
    }
}

export default connect(null, mapToActions)(ToDoItem);

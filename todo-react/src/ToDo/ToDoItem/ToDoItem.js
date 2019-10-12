import React from 'react';

export default class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
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
                        <button className="btn btn-danger"><i className="material-icons" color="warn">
                            delete_sweep
                        </i></button>
                    </div>
                </div>
            </div>
        );
    }
}

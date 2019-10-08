import React from 'react';

export default class ToDoItem extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="card mb-3" className="card bg-light mb-3">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">{this.props.textoTitle}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

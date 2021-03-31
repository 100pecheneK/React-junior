import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
    render() {
        const {label, itemId, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        let textClassNames = "d-flex align-items-center form-check-label h-100 w-100 ml-2";
        let importantClassNames = "d-flex justify-content-center align-items-center far fa-star";

        if (done) {
            textClassNames += " done";
        }
        if (important) {
            textClassNames += " important";
            importantClassNames += " important";
            importantClassNames = importantClassNames.replace('far', 'fas');
        }

        return (
            <div className="row todo-list m-1 todo-list-item">
                <div className="form-check col-8 p-0 list-group-item waves-effect">
                    <span
                        className={textClassNames}
                        key={itemId}
                        onClick={onToggleDone}>
                        {label}
                    </span>
                </div>
                <div className="col">
                    <div className="row h-100">
                        <div className="col-6 p-2 list-group-item waves-effect" onClick={onToggleImportant}>
                            <span className={importantClassNames}/>
                        </div>
                        <div className="col-6 p-2 list-group-item waves-effect" onClick={onDeleted}>
                            <span className="w-100 h-100 d-flex justify-content-center align-items-center fas fa-trash-alt"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
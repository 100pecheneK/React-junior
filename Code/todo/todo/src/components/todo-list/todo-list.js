import React, {Component} from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

export default class TodoList extends Component {
    render() {
        const {todos, onDeleted, onToggleImportant, onToggleDone} = this.props;
        const elements = todos.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <TodoListItem
                    itemId={id}
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            )
        });
        return (
            <div className="row mt-3">
                <div className="col">
                    <ul className="list-group">
                        {elements}
                    </ul>
                </div>
            </div>
        )
    }
}



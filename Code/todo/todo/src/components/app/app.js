import React, {Component} from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import FilterPanel from "../filter-panel";
import ItemAddForm from "../item-add-form";
import TodoWidget from "../todo-widget";

export default class App extends Component {
    maxId = 0;
    state = {
        todoData: [
            this.createTodoItem('A'),
            this.createTodoItem('B'),
            this.createTodoItem('C'),
            this.createTodoItem('D'),
        ],
        term: '',
        filter: 'active' // active, important, done

    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label: label,
            important: false,
            done: false
        }
    }

    onItemDelete = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newTodoData
            }
        })
    };
    onItemAdded = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newTodoData = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newTodoData
            }
        })

    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };
    onSearchChange = (term) => {
        this.setState({term});
    };
    onFilterChange = (filter) => {
        this.setState({filter})
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {
        switch (filter) {
            case 'active':
                return items.filter((item) => !item.done);
            case 'important':
                return items.filter((item) => item.important);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term),
            filter
        );
        const doneCount = todoData.filter(
            (el) => el.done)
            .length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <AppHeader/>
                        <FilterPanel
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                        <TodoWidget
                            toDo={todoCount}
                            done={doneCount}/>
                        <SearchPanel
                            onSearchChange={this.onSearchChange}/>
                        <ItemAddForm
                            onItemAdded={this.onItemAdded}
                        />
                        <TodoList
                            todos={visibleItems}
                            onDeleted={this.onItemDelete}
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                        />
                    </div>
                </div>
            </div>

        )
    }
};


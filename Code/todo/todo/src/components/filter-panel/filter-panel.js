import React, {Component} from "react";
import './filter-panel.css'

export default class FilterPanel extends Component {
    buttons = [
        {name: 'active', label: 'fas fa-list'},
        {name: 'important', label: 'fas fa-star'},
        {name: 'done', label: 'fas fa-check'},
    ];


    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-filter-active' : 'btn-filter-disabled';
            return (
                <button type="button" className={`btn btn-filter  w-100 ${buttonClass}`}
                        key={name}
                        onClick={()=>onFilterChange(name)}>
                    <i className={label}/>
                </button>
            )
        });
        return (
            <div className="row">
                <div className="col">
                    <div className="btn-group w-100" data-toggle="buttons">
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
};

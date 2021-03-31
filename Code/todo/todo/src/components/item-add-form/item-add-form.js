import React, {Component} from "react";
import './item-add-form.css'

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form className="add-new-panel md-form active-pink active-pink-2 mb-3 mt-0 d-flex"
                    onSubmit={this.onSubmit}
                    >
                        <input className="form-control m-0" type="text" placeholder="Add New" aria-label="Add New"
                               onChange={this.onLabelChange}
                        value={this.state.label}/>
                        <div className="input-group-append">
                            <button
                                className="border-0 input-group-text primary-color text-white lighten-3 waves-effect">
                                <i className="fas fa-plus" aria-hidden="true"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
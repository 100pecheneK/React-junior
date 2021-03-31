import React, {Component} from "react";

import './search-panel.css'

export default class SearchPanel extends Component {
    state = {
        term: ''
    };
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <div className="row mt-3">
                <div className="col">
                    <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                               value={this.state.term}
                               onChange={this.onSearchChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
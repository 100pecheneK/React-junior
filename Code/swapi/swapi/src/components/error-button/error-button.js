import React, {Component} from "react";

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        console.log('render');
        if (this.state.renderError) {
            this.foo.bar = 0;
        }
        return (
            <button
                className="red"
                onClick={() => this.setState({renderError: true})}
            >Error</button>
        )
    }

}
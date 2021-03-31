import React, {Component} from "react";
import ErrorMsg from "../error-msg";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMsg/>
        }
        return this.props.children;
    }
}
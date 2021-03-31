import React, {Component} from "react";

export default class TodoWidget extends Component {
    render() {
        const {toDo, done} = this.props;
        return (
            <div className="row mt-2">
                <div className="col">
                    <p className="text-black-50 text-center">{toDo} more to do, {done} done</p>
                </div>
            </div>
        )
    }
}
import React, {Component} from "react";
export default class BodyMain extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="jumbotron jumbotron-fluid mt-5 py-3 elegant-color-dark">
                            <div className="container">
                                <div className="row text-white">
                                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                                        <img src="" alt="" className="img img-fluid rounded z-depth-1"/>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <h2 className="display-5">Cras justo odio</h2>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item elegant-color">Cras 12</li>
                                            <li className="list-group-item elegant-color">Dapibus 1230102</li>
                                            <li className="list-group-item elegant-color">Morbi 123231</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
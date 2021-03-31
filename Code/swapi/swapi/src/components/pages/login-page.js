import React from "react"

import {Redirect} from "react-router-dom"


const LoginPage = ({isLoggedIn, onLogin}) => {
    if (isLoggedIn){
        return <Redirect to="/"/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white">Login Page</p>
                    <button className="list-group-item list-group-item-action elegant-color"
                            onClick={onLogin}>Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
import React from "react"
import { Redirect } from "react-router-dom"

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div>
                <h1>Hello, World!!!</h1>
            </div>
        )
    }
    return <Redirect to="/login"/>
}

export default SecretPage
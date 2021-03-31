import React from "react"
import {Link} from "react-router-dom"

const Header = ({onServiceChange}) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark elegant-color-dark">
            <Link to="/" className="navbar-brand" href="/">Swapi</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/people/"
                          className="list-group-item list-group-item-action elegant-color">
                        People
                    </Link>
                    <Link to="/planets/"
                          className="list-group-item list-group-item-action elegant-color">
                        Planets
                    </Link>
                    <Link to="/starships/"
                          className="list-group-item list-group-item-action elegant-color">
                        Starships
                    </Link>
                    <Link to="/secret/"
                          className="list-group-item list-group-item-action elegant-color">
                        Secret
                    </Link>
                    <Link to="/login"
                          className="list-group-item list-group-item-action elegant-color">
                        Login
                    </Link>
                    <button className="list-group-item list-group-item-action elegant-color-dark"
                            onClick={onServiceChange}>
                        Change Service
                    </button>
                    <a href="https://vk.com/mistermihail23"
                       className="list-group-item list-group-item-action elegant-color-dark">Developer</a>
                </ul>
            </div>
        </nav>
    )

}
export default Header
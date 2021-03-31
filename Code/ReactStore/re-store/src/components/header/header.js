import React from "react"
import {Link} from "react-router-dom"
import "./header.css"
const Header = ({numItems, total}) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
            <Link to="/" className="navbar-brand">ReStore</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Catalog</Link>
                    </li>
                    <li className="nav-item">
                        <div className="btn-group">
                            <button type="button"
                                    className="btn btn-outline-primary dropdown-toggle"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" disabled>
                                Category
                            </button>
                            <div className="dropdown-menu">
                                <Link to="/" className="dropdown-item">Cat</Link>
                                <Link to="/" className="dropdown-item">Bul</Link>
                                <Link to="/" className="dropdown-item">Dog</Link>
                            </div>
                        </div>
                    </li>
                </ul>
                <form className="form-inline mb-2 mb-md-0 mr-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                           aria-label="Search" disabled/>
                        <button className="btn btn-outline-success my-2 my-sm-0"
                                type="submit" disabled>Search
                        </button>
                </form>
                <Link to="/cart" className="btn btn-primary">
                    Cart <span className="badge badge-light mx-2">{numItems}</span>
                    ${total}
                </Link>
            </div>
        </nav>
)
}
export default Header
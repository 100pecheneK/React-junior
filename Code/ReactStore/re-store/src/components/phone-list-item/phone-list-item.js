import React from "react"
import './phone-list-item.css'

const PhoneListItem = ({phone, onAddedToCart}) => {
    const {title, price, image} = phone
    return (
        <div className="card">
            <img src={image} className="card-img" alt="phone"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <button
                    onClick={() => onAddedToCart()}
                    className="btn btn-primary">Add to cart
                </button>
            </div>
        </div>
    )
}
export default PhoneListItem
import React from "react"
import {ContainerRow} from "../../containers"
import "./shopping-cart-table.css"
import {connect} from "react-redux"
import {
    allPhonesRemovedFromCart,
    phoneAddedToCart,
    phoneRemovedFromCart
} from "../../actions"

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item
        return (
            <tr key={id}>
                <th scope="row">{idx + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <div className="row">
                        <div
                            className="col-12 col-sm-4 p-0 pb-1 pb-sm-0 pr-sm-1 col-action">
                            <button
                                onClick={() => onIncrease(id)}
                                className="btn btn-outline-success btn-block">Plus
                            </button>
                        </div>
                        <div
                            className="col-12 col-sm-4 p-0 pb-1 pb-sm-0 pr-sm-1 col-action">
                            <button
                                onClick={() => onDecrease(id)}
                                className="btn btn-outline-warning btn-block">Munis
                            </button>
                        </div>
                        <div
                            className="col-12 col-sm-4 p-0 pb-1 pb-sm-0 pr-sm-1 col-action">
                            <button
                                onClick={() => onDelete(id)}
                                className="btn btn-outline-danger btn-block">Delete
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
    const content = (
        <div className="col">
            <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(renderRow)}
                    </tbody>
                </table>
            </div>
            <div className="row justify-content-end">
                <div className="col-12 col-md-5">
                    <h4 className="text-right">Total: ${total}</h4>
                </div>
                <div className="col-12 col-md-3">
                    <button className="btn btn-primary btn-block">Buy</button>
                </div>
            </div>
        </div>

    )
    return (
        <ContainerRow content={content}/>
    )
}
const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
    onIncrease: phoneAddedToCart,
    onDecrease: phoneRemovedFromCart,
    onDelete: allPhonesRemovedFromCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
import React from "react"
import {Route, Switch} from "react-router-dom"
import "./app.css"
import {HomePage, CartPage} from "../pages"
import Header from "../header"
import ShoppingCartTable from "../shopping-cart-table"

const App = () => {
    return (
        <main role="main">
            <Header numItems={123} total={23}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage}/>
                <Route render={() => <h1>Page no found</h1>}/>
            </Switch>
            <ShoppingCartTable/>
        </main>

    )
}

export default App
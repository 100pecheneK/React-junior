import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./components/app"
import ErrorBoundary from "./components/error-boundary"
import PhoneStoreService from "./services/phonestore-service"
import {PhoneStoreServiceProvider} from "./components/phonestore-service-context"

import store from "./store"

const phoneStoreService = new PhoneStoreService()

const Main = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <PhoneStoreServiceProvider value={phoneStoreService}>
                    <Router>
                        <App/>
                    </Router>
                </PhoneStoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'))

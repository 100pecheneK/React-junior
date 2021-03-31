import ReactDOM from "react-dom"
import React from "react"
import * as serviceWorker from './serviceWorker'
import App from "./components/app"

ReactDOM.render(<App/>, document.getElementById('root'))
serviceWorker.register()

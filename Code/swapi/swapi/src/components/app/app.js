import React, {Component} from "react"

import Header from "../header"
import RandomPlanet from "../random-planet"
import SwapiService from "../../services/swapi-service"
import DjangoSwapiService from "../../services/django-swapi-service.js"
import ErrorBoundary from "../error-boundary"

import {SwapiServiceProvider} from "../swapi-service-context"
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    WelcomePage,
    LoginPage,
    SecretPage,
    NotFoundPage
} from "../pages"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

export default class App extends Component {

    state = {
        swapiService: new DjangoSwapiService(),
        isLoggedIn: false
    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DjangoSwapiService : SwapiService
            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        const {isLoggedIn} = this.state
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <Header onServiceChange={this.onServiceChange}/>
                        <Switch>
                            <Route path="/" render={() => <WelcomePage/>} exact/>

                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets/:id?" component={PlanetsPage}/>
                            <Route path="/starships/:id?" component={StarshipsPage}/>

                            <Route path="/secret" render={() => (
                                <SecretPage
                                    isLoggedIn={isLoggedIn}/>
                            )}/>
                            <Route path="/login" render={() => (
                                <LoginPage
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                            )}/>
                            <Route render={() => <NotFoundPage/>}/>
                        </Switch>


                        <RandomPlanet updateInterval={10000}/>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

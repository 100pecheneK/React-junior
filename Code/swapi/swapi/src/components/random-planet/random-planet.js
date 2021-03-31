import React, {Component} from "react"
import PropTypes from 'prop-types'
import Spinner from "../spinner"
import ErrorMsg from "../error-msg"
import ContainerDetailView from "../container-detail-view"
import ErrorBoundary from "../error-boundary"
import DjangoSwapiService from "../../services/django-swapi-service"

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 3000
    }
    static propTypes = {
        updateInterval: PropTypes.number

    }
    state = {
        planet: null,
        loading: true
    }
    swapiService = new DjangoSwapiService()

    componentDidMount() {
        const {updateInterval} = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 5) + 1
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }


    render() {
        const {planet, loading, error} = this.state

        const hasData = !(loading || error)

        const errorMsg = error ? <ErrorMsg/> : null
        const spinner = loading ? <Spinner/> : null
        const planetDetail = hasData ? <PlanetView planet={planet}/> : null
        const content = (
            <React.Fragment>
                <div className="col-12">
                    <h2>Random planet</h2>
                </div>
                {errorMsg}
                {spinner}
                {planetDetail}
            </React.Fragment>
        )

        return (
            <ErrorBoundary>
                <ContainerDetailView contentDetail={content}/>
            </ErrorBoundary>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet

    return (
        <React.Fragment>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <img src={`http://localhost:8000/media/image/planets/${id}.jpg`}
                     alt="" className="img img-fluid rounded z-depth-1"/>
            </div>
            <div className="col-12 col-md-8">
                <h2 className="display-5">{name}</h2>
            </div>
            <div className="col-12 mt-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item elegant-color">Population {population}</li>
                    <li className="list-group-item elegant-color">Rotation
                        Period {rotationPeriod}</li>
                    <li className="list-group-item elegant-color">Diameter {diameter}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
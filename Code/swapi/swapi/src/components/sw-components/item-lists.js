import React from "react"
import BodySelect from "../body-select/body-select"
import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helper"

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} [{model}]</span>

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getALlPlanets
    }
}
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getALlStarships
    }
}

const PersonList =
    compose(
        withSwapiService(mapPersonMethodsToProps),
        withData,
        withChildFunction(renderName)
    )(BodySelect)
const PlanetList =
    compose(
        withSwapiService(mapPlanetMethodsToProps),
        withData,
        withChildFunction(renderName),
    )(BodySelect)

const StarshipList =
    compose(
        withSwapiService(mapStarshipMethodsToProps),
        withData,
        withChildFunction(renderModelAndName)
    )(BodySelect)

export {
    PersonList,
    PlanetList,
    StarshipList,
}
import ItemDetail, {Record} from "../item-detail"
import React from "react"
import {withSwapiService} from "../hoc-helper"

const PlanetsDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetail>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}
export default withSwapiService(mapMethodsToProps)(PlanetsDetails)
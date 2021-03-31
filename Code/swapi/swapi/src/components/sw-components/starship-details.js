import ItemDetail, {Record} from "../item-detail"
import React from "react"
import {withSwapiService} from "../hoc-helper"

const StarshipDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record field="name" label="Name"/>
            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
        </ItemDetail>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}
export default withSwapiService(mapMethodsToProps)(StarshipDetails)
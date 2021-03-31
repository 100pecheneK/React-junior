import React, {useEffect} from "react"
import {PlanetDetails, PlanetList} from "../sw-components"
import {withRouter} from "react-router-dom"
import scrollToTop from "../scroller"
const useScroll = (value) => {
    useEffect(() => {
        scrollToTop()
    }, [value])
}
const PlanetsPage = ({history, match}) => {
    const {id} = match.params
    useScroll(id)
    return (
        <React.Fragment>
            <PlanetDetails itemId={id}/>
            <PlanetList
                onItemSelected={(id) => history.push(id)}/>
        </React.Fragment>
    )
}
export default withRouter(PlanetsPage)
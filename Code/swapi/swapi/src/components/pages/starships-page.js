import React, {useEffect} from "react"
import {StarshipDetails, StarshipList} from "../sw-components"
import scrollToTop from "../scroller"
import {withRouter} from "react-router-dom"

const useScroll = (value) => {
    useEffect(() => {
        scrollToTop()
    }, [value])
}
const StarshipsPage = ({history, match}) => {
    const {id} = match.params
    useScroll(id)
    return (
        <React.Fragment>
            <StarshipDetails itemId={id}/>
            <StarshipList
                onItemSelected={(id) => history.push(id)}/>
        </React.Fragment>
    )
}
export default withRouter(StarshipsPage)

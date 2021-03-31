import React from "react"
import ContainerDetailView from "../container-detail-view"


const WelcomePage = () => {
    const content = (
        <div className="col">
            <h3>Welcome to SWAPI!</h3>
            <p>Select people, planets or&nbsp;starships category!</p>
            <img className="img" src="http://127.0.0.1:8000/media/image/welcome/welcome-page.jpg"></img>
        </div>
    )
    return (
        <ContainerDetailView contentDetail={content}/>
    )
}
export default WelcomePage

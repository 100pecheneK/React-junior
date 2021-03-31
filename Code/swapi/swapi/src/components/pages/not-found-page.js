import React from "react"
import ContainerDetailView from "../container-detail-view"

const NotFoundPage = () => {
    const containerDetail = (
        <div className="col-8">
            <h1>Page not found</h1>
        </div>
    )
    return (
        <ContainerDetailView contentDetail={containerDetail}/>
    )
}
export default NotFoundPage

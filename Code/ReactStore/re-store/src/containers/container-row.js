import React from "react"
import PropTypes from "prop-types"

const ContainerRow = ({content}) => {
    return (
        <div className="container">
            <div className="row">
                {content}
            </div>
        </div>
    )
}
ContainerRow.propTypes = {
    content: PropTypes.node
}
export default ContainerRow
import React from "react"
import PropTypes from 'prop-types'
import Container from "../container"

const BodySelect = (props) => {
    const {data, onItemSelected, children: renderLabel} = props
    const itemListContent = data ? data.map((item) => {
        const {id} = item

        const label = renderLabel(item)

        return (
            <button type="button"
                    className="list-group-item list-group-item-action elegant-color"
                    key={id}
                    onClick={() => {

                        onItemSelected(id)
                    }}>
                {label}
            </button>
        )
    }) : null
    return (
        <Container content={itemListContent}/>
    )
}

BodySelect.defaultProps = {
    onItemSelected: () => {
    }
}

BodySelect.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default BodySelect
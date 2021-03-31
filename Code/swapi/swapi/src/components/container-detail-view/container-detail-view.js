import React from "react";
import PropTypes from 'prop-types'
import Container from "../container";

const ContainerDetailView = ({contentDetail}) => {
    const content = (
        <div className="container">
            <div className="row py-3 text-white">
                {contentDetail}
            </div>
        </div>
    );
    return (
        <Container content={content}/>
    )
};

ContainerDetailView.propTypes = {
    contentDetail: PropTypes.node
}
export default ContainerDetailView
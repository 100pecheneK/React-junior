import React from "react";
import PropTypes from "prop-types"

const Container = ({content}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="jumbotron jumbotron-fluid mt-3 elegant-color-dark p-0">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
};
Container.propTypes = {
    content: PropTypes.node
}
export default Container;
import React from "react"

const ErrorMsg = () => {
    return (
        <div className="col-12">
            <div className="alert alert-danger m-0" role="alert">
                <p>Something has gone terribly wrong, but <b>we already sent droids to fix it!</b></p>
                <p>(Please, try to reload this page)</p>
            </div>
        </div>
    )
}

export default ErrorMsg
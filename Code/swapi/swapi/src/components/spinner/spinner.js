import React from "react";
import "./spinner.css"

const Spinner = () => {
    return (
        <div className="col-12 py-2 d-flex justify-content-center">
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-red-only spinner-color-white">
                    <div className="circle-clipper left">
                        <div className="circle"/>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"/>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Spinner;


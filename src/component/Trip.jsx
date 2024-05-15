import "./Trip.css"
import React from "react";

function Trip(props) {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover best destination for your vacation here..</p>
            <div className="tripCard">
                <div className="t-card">
                    <div className="t-image">
                        <img src={props.image1} alt="image" />
                    </div>
                    <h4>{props.heading1}</h4>
                    <p>{props.para1}</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img src={props.image2} alt="image" />
                    </div>
                    <h4>{props.heading2}</h4>
                    <p>{props.para2}</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img src={props.image3} alt="image" />
                    </div>
                    <h4>{props.heading3}</h4>
                    <p>{props.para3}</p>
                </div>
            </div>
        </div>
    )
}

export default Trip;
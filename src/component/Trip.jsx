import TitleHeading from "./TitleHeading";
import "./Trip.css"
import React from "react";
import TripCard from "./TripCard";

function Trip({ image1, heading1, para1, image2, heading2, para2, image3, heading3, para3, p, h1 }) {
    return (
        <div className="trip">
            <TitleHeading
                h1={h1}
                p={p}
            />
            <TripCard image1={image1}
                heading1={heading1}
                para1={para1}
                image2={image2}
                heading2={heading2}
                para2={para2}
                image3={image3}
                heading3={heading3}
                para3={para3}
            />
        </div>
    )
}

export default Trip;
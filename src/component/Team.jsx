import React from 'react'
import "../component/Team.css"

const Team = (props) => {
    return (
        <div className="Team">
            <div className="team-card">
                <div className="team-image">
                    <img src={props.image1} alt="image" />
                </div>
                <h4>{props.heading1}</h4>
                <p>{props.para1}</p>
            </div>
            <div className="team-card">
                <div className="team-image">
                    <img src={props.image2} alt="image" />
                </div>
                <h4>{props.heading2}</h4>
                <p>{props.para2}</p>
            </div>
            <div className="team-card">
                <div className="team-image">
                    <img src={props.image3} alt="image" />
                </div>
                <h4>{props.heading3}</h4>
                <p>{props.para3}</p>
            </div>
        </div>
    )
}

export default Team;
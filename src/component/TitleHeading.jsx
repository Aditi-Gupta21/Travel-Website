import React from 'react'
import "./TitleHeading.css"

const TitleHeading = (props) => {
    return (
        <div className='titleHeading'>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}

export default TitleHeading

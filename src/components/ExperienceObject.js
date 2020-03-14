import React from 'react'
import '../styles/Experience.css'
import TimeLine from '../components/Timeline/TimeLine'

function ExperienceObject(props) {
    return (
        <div className="object-div">
            <div className="section-header-parent">
                <h1 className="section-header-child list-number">
                    02.
                </h1>
                <h1 className="section-header-h1 section-header-child">
                    Experience
                </h1>
                <div className=" section-header-child">
                    <hr id="experience-after-header" className="after-header"></hr>
                </div>
            </div>
            <div className="experience-content-div">
                <TimeLine />
            </div>
            
        </div>
        
    )
}

export default ExperienceObject
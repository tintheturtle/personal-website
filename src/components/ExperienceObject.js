import React from 'react'
import '../styles/Experience.css'
import TimeLine from '../components/Timeline/TimeLine'

function ExperienceObject(props) {
    return (
        <div id="project-object-div" className="object-div">
            <div id="project-header" className="section-header-parent experience-header">
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
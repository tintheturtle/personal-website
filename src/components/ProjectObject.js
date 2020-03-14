import React from 'react'
import ProjectList from '../components/ProjectList/ProjectList'
import '../styles/ProjectList.css'

function ProjectObject() {
    return (
        <div id="project-object-div" className="object-div">
            <div id="project-header" className="section-header-parent project-header-class">
                <h1 className="section-header-child list-number">
                    03.
                </h1>
                <h1 className="section-header-h1 section-header-child">
                    Projects
                </h1>
                <div className=" section-header-child">
                    <hr className="after-header"></hr>
                </div>
            </div>
            <div id="project-content-div" className="content-div">
                <ProjectList/>
            </div>
            
        </div>
    )
}

export default ProjectObject
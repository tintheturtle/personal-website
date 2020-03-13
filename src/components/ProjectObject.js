import React from 'react'
import ProjectList from '../components/ProjectList/ProjectList'
import '../styles/ProjectList.css'

function ProjectObject() {
    return (
        <div className="object-div">
            <div className="section-header-parent">
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
            <div className="content-div">
                <ProjectList/>
            </div>
            
        </div>
    )
}

export default ProjectObject
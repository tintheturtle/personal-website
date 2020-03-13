import React from 'react'
import ProjectItem from './ProjectItem'
import data from '../../data/Project.json'

const ProjectList = () => 
data.length > 0 && (
    <div className="project-list-container">
        { data.map((data, indx) => (
            <ProjectItem data={data} key={indx} />
        ))}
    </div>
)

export default ProjectList
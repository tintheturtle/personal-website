import React from 'react'
import Example from '../../images/Example.png'

const ProjectItem = ({data}) => (
    <div className="project-item-container">
        <div className="project-image">
            <a href={data.link}>
                <img src={Example} alt="example" className="project-item-image"/>
            </a>
        </div>
        <div className="project-information">
            <h4 className="project-h4">
                Featured Project
            </h4>
            <h3 className="project-h3">
                {data.title}
            </h3>
            <div className="project-desc">
                <p className="project-p">
                    {data.description}
                </p>
            </div>
            <div className="project-tech-ul">
                <ul clstyle={{ listStyle: "none", display: "inline"}}>
                    { data.technologies.map((data) => (
                        <li className="tech-list"> { data } </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default ProjectItem
import React from 'react'
import '../styles/Headshot.css'
import '../styles/Experience.css'
import Navbar from '../components/Navbar'
import IntroductionObject from '../components/IntroductionObject'
import HeadshotObject from '../components/HeadshotObject'
import ExperienceObject from '../components/ExperienceObject'
import ProjectObject from '../components/ProjectObject'
import ContactObject from '../components/ContactObject'

function Home() {
    return (
        <div className="App">
            <Navbar/>
            {/* <div className="left-socialmedia">
                <ul>
                    <li> LinkedIn </li>
                    <li> GitHub </li>
                    <li> Instagram </li> 
                </ul>
            </div> */}
            <div className="container-div">
                <div className="introduction-container">
                    <IntroductionObject/>
                </div>
                <div className="headshot-container">
                    <HeadshotObject />
                </div>
                <div className="experience-container">
                    <ExperienceObject />
                </div>
                <div className="project-container">
                    <ProjectObject />
                </div>
                <div className="contact-container">
                    <ContactObject />
                </div>
            </div>


            <div className="right-email">

            </div>
        </div>
    )
}

export default Home
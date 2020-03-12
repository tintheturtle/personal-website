import React from 'react'
import logo from '../logo.svg'
import '../styles/Headshot.css'
import '../styles/Experience.css'
import IntroductionObject from '../components/IntroductionObject'
import HeadshotObject from '../components/HeadshotObject'
import ExperienceObject from '../components/ExperienceObject'
import ProjectObject from '../components/ProjectObject'

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Welcome to Tin's Personal Website!
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
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
            </div>


            <div className="right-email">

            </div>
            
        </div>
    )
}

export default Home
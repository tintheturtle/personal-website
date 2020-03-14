import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Turtle from '../images/pet.png'
import '../styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div id="custom-navbar" className="custom-navbar navbar">
                <div className="navbar-logo">
                    <img className="navbar-img" src={Turtle} alt="turtle"/>
                </div>
                <div className="navbar-links">
                    <Link
                        className="about-navbar-link navbar-link"
                        activeClass="active"
                        to="headshot-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    > About</Link>
                    <Link
                        className="experience-navbar-link navbar-link"
                        activeClass="active"
                        to="experience-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    > Experience</Link>
                    <Link
                        className="project-navbar-link navbar-link"
                        activeClass="active"
                        to="project-header-class"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    > Projects</Link>
                    <Link
                        className="contact-navbar-link navbar-link"
                        activeClass="active"
                        to="contact-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    > Contact</Link>
                </div>
                <div className="resume-button">
                    <button className="request-resume-button">
                        Resume
                    </button>
                </div>
                
            </div>

        )
    }
    
}

export default Navbar
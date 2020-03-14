import React from 'react'
import './../styles/Contact.css'
import Turtle from '../images/pet.png'

const ContactObject = () => (
    <div id="project-object-div" className="object-div">
            <div id="project-header" className="section-header-parent contact-header">
                <h1 className="section-header-child list-number">
                    04.
                </h1>
                <h1 className="section-header-h1 section-header-child">
                    Contact 
                </h1>
                <div className=" section-header-child">
                    <hr className="after-header"></hr>
                </div>
            </div>
            <div className="content-div">
                <div className="contact-info">
                    <h1 className="contact-line"> Email me at tintheturtle@gmail.com </h1>
                    <img className="turtle" src={Turtle} alt="turtle" />
                </div>
            </div>
            {/* <Icons made by Freepik from https://www.flaticon.com/authors/freepik on www.flaticon.com */}
        </div>
)

export default ContactObject
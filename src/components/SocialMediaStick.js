import React from 'react'
import LinkedIn from '../images/linkedin.png'
import Instagram from '../images/instagram.png'
import Github from '../images/github.png'
import '../styles/SocialMediaStick.css'

function SocialMediaStick() {
    return (
        <div className="social-media-icon-div">
            <ul className="social-media-icon-list">
                <li> <img className="social-media-icons" src={LinkedIn} alt="linkedin" /> </li>
                <li> <img className="social-media-icons" src={Instagram} alt="instagram" /> </li> 
                <li> <img className="social-media-icons" src={Github} alt="github" /> </li>
            </ul>
        </div>
    )
}

export default SocialMediaStick
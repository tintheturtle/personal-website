import React from 'react'
import Headshot from '../images/headshot.jpg'

function HeadshotObject() {
    return (
        <div className="object-div" >
            <div className="section-header-parent">
                <h1 className="section-header-child list-number">
                    01.
                </h1>
                <h1 className="section-header-h1 section-header-child">
                    About me
                </h1>
                <div className=" section-header-child">
                    <hr className="after-header"></hr>
                </div>
            </div>
            
            <div id="content-div">
                <div className="headshot-description">
                    <div className="headshot-info">
                        <h4 class="wordCarousel">    
                            <span>Hello, I am a... </span>  
                            <div className="wordCarousel-div"> 
                                <ul class="flip3"> 
                                    <li className="wordCarousel-li"><u>Programmer</u></li>
                                    <li className="wordCarousel-li"><u>Web Developer</u></li>
                                    <li className="wordCarousel-li"><u>Software Engineer</u></li> 
                                </ul>
                            </div>  
                        </h4>
                        <h4>
                            I build things with passion.
                        </h4>
                        <p className="headshot-paragraph">
                            I'm a software engineer that is based in Boston, MA and currently attending <a href="http://www.bu.edu/cs/"> Boston University </a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                        </p>
                    </div>
                </div>
                <img id="headshot" src={Headshot} alt="headshot" className="headshot-div headshot-image"/>         
            </div>  
         </div>
    )
}

export default HeadshotObject
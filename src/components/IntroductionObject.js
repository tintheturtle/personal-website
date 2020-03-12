import React from 'react'
import '../styles/Introduction.css'

function IntroductionObject() {
    return (
        <div className="object-div " >
            <div id="content-div">
                <div className="intro-description">
                    <div className="intro-info">
                        <h3 className="hello-h3"> Hello, my name is </h3>
                        <h1 className="name-h1"> Tin Nguyen </h1> 
                        <h1 className="desc-h1"> I build things for the web. </h1> 
                        <p className="intro-p">
                            I'm a software engineer that is based in Boston, MA and currently attending <a href="http://www.bu.edu/cs/"> Boston University </a>. I aim to build high quality software and web applications.
                        </p>
                    </div>
                </div>         
            </div>  
         </div>
    )
}

export default IntroductionObject
import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_image from '../../assets/about-profile.png'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>

            <div className="about-right">

                <div className="about-para">
                    <p>I'm an experienced Full Stack Developer with over 2 years of professional experience in this field. Throughout my career, I have had a privilege of collaborating with prestigious organisations, contributing to their success and growth.
                    </p>
                    <p>My passion towards Java Development is not only reflective in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>HTML | CSS </p> <hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Java Script</p> <hr style={{width:'53%'}}/></div>
                    <div className="about-skill"><p>Angular</p> <hr style={{width:'55%'}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:'57%'}}/></div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:'60%'}}/></div> 
                    <div className="about-skill"><p>JAVA</p> <hr style={{width:'63%'}}/></div>    
                    <div className="about-skill"><p>Hibernate</p> <hr style={{width:'66%'}}/></div> 
                    <div className="about-skill"><p>Spring </p> <hr style={{width:'69%'}}/></div> 
                    <div className="about-skill"><p>Spring-boot</p> <hr style={{width:'72%'}}/></div> 

                </div>
            </div>
        </div>

        <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Years of Experience.</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>6+</h1>
                    <p>Projects Completed.</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>9+</h1>
                    <p>Happy Clients.</p>
                </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile-img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Shiivam Upadhyay,</span><br /> Full Stack Developer Based in Bhopal <font color='#f08804'>(M.P)</font> .</h1>
            <p>I'm a Full Stack Developer, From Bhopal with 2yr of Experience in Java Application Development.J2EE </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me </AnchorLink></div>
                <div className='hero-resume'> My Resume</div>
            </div>
        </div>
    )
}

export default Hero;
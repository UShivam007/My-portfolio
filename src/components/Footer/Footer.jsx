import React from 'react'
import './Footer.css';
import Footer_logo from "../../assets/footer_logo.svg";
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return(
    <div className='footer'>
        <div className="footer-top">
          
            <div className="footer-top-left">
                <img src={Footer_logo} alt="" />
                <p>I am a Full Stack Web Developer with 2+ year of Experience in React, Java, And Node. I am passionate about building user-friendly and responsive web applications that provide seamless user experience.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                  <img src={user_icon} alt="" />
                  <input type="email" placeholder='Enter Your Email' />
              </div>
              <div className="footer-subscribe">
                Subscribe
              </div>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p className="footer-bottom-left">
            @2024 Shivam Upadhyay. All Right Reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}
export default Footer;
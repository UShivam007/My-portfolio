import React, { useState } from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { toast } from 'react-toastify';

const variable = {
    name:"",
    email:"",
    message:""
}

const Contact = () => {

const [FormData,setFormData] = useState(variable);

function handleChange(e){
    let {name,value} = e.target;
    setFormData({...FormData,
        [name]: value,
    })
}

function onSubmit(e){
    e.preventDefault();
    if(FormData.name === "" || FormData.email === "" || FormData.message === ""){
        toast.error("Please Fill All the Fields");
    }else{
        toast.success("Message Sent Successfully !");
        setFormData(variable);
    }
}

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className='contact-left'>
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take the new Projects, so feel free to send me a message about anything that you want to build. You can Contact me Anytime .</p>

                    <div className="contactDetails">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>Ushivam19@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91-982774563212</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Shymala Hills,Bhopal</p>
                        </div>
                    </div>
                </div>
                <form action="#" className="contact-right" onSubmit={onSubmit} >
                    <label htmlFor="name">Your Name</label> <input type="text" name='name' id='name' placeholder='Enter your Name'  value={FormData.name} onChange={handleChange}/>
                    <label htmlFor="email">Your Email</label> <input type="text" name='email' id='email' placeholder='Enter Email ID' value={FormData.email}  onChange={handleChange}/>
                    <label htmlFor="text">Write your message here !</label><textarea name="message" row='8' id="text" placeholder='Enter Your Message Here' value={FormData.message} onChange={handleChange}></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>

            </div>
        </div>
    )
}

export default Contact;
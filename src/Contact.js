import React from 'react';

// img import
import map from './img/map.jpg';
 //import icon
 import { FaUser } from "react-icons/fa";
 import { AiOutlineMail } from "react-icons/ai";
 import { AiOutlineMessage } from "react-icons/ai";

// import css
import "./styles/contact.css";

function Contact() {
    return (
        <>
            <section className="contact">
              <div className="contact-container">
                  <div className="contact-div1">
                     <h1 className="contact-title">
                         MESSAGE US
                     </h1> 

                     <span>
                     <FaUser className="contact-icon"/>
                     <input type="text" className="contact-text-input" placeholder="Name" />   
                     </span>

                     <span>
                     <AiOutlineMail className="contact-icon"/>
                     <input type="email" className="contact-email-input" placeholder="Email"/>
                     </span>

                     <span>
                     <AiOutlineMessage className="contact-message-icon"/>
                     <textarea name="" id="" cols="10" rows="10" className="contact-text-aria" placeholder="Message"></textarea> 
                     </span> 

                     <button className="contact-btn">SEND</button>
                  </div>
                  <div className="contact-div2">
                    <div className="contact-div2-map">
                        <img src={map} alt="contact-map" className="map-contact"/>
                    </div>
                    <div className="contact-information">
                        <div className="email-and-location-contact-div">
                           <div className="emailll">
                               <span className="email">Email</span>
                               <span className="emaill">Usufahmed@gmail.com</span>
                           </div>
                           <div className="locationn">
                               <span className="location">Location</span>
                               <span className="location-address">Bangladesh-Dhaka</span>
                               <span className="location-address">Kishoreganj,Kuliarchor</span>
                           </div>
                        </div>
                        <div className="phone-and-legal-contact-div">
                        <div className="phonee">
                               <span className="phone">Phone</span>
                               <span className="nm">+880-01348549385</span>
                           </div>
                           <div className="legall">
                               <span className="legal">Legal</span>
                               <span className="legal-text">Privcy & Cookies</span>
                           </div>
                        </div>
                    </div>
                  </div>
              </div>
            </section>
        </>
    )
}

export default Contact

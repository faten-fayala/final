import React from "react";
import fcb from '../images/fcb.svg'
import insta from '../images/insta.svg'
import youtube from '../images/youtube.svg'
import contacticon from '../images/contacticon.png'
import Formul from "./Formul";
const Contact = () => {
  return (
    <div className="section-elements contact">
      {/* <div class="container">
   <h1>Contact Us</h1>
   <div class="box">
       <input required type="text"/>
       <span>Name</span>
   </div>
   <div class="box">
       <input required type="text"/>
       <span>Email</span>
   </div>
   <div class="box">
       <input required type="text"/>
       <span>Subject</span>
   </div>
   <div class="box">
       <textarea required cols="2"  rows="4"></textarea>
       <span>Message</span>
   </div>
   <a href="#">Send</a>
</div> */}

      <div className="form-1">

        <div className="element-contact">
        <img className="contacticon" src={contacticon} alt=""/>
          <h1 className="title">Contact us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe maxime deserunt veritatis tempore totam hic vitae sapiente
            harum nihil. 
          </p>
          <div className="social-media-icons">
          <img src={fcb} alt=""/>
          <img src={insta} alt=""/>
          <img src={youtube} alt=""/>
          </div>
         
         
        </div>
        <div className="social-media"></div>
      </div>
    
      <div className="form">
        <div className="contact-form">
           <h1 className="contact-form-title">Speak your mind</h1>
        <Formul/>
        {/* <form>
          <input type="text" placeholder="Your name*" className="text"></input>
          <input type="text" placeholder="Your email*" className="text"></input>
          <div className="text third">
            <input type="text" placeholder="Weight"></input>
            <input type="text" placeholder="Height"></input>
            <input type="text" placeholder="Age"></input>
          </div>

          <textarea
            type="textarea"
            placeholder="Your message"
            rows="5"
            cols="50"
            className="text"
          ></textarea>
          <div>
            <input type="submit" value="Send" class="submit" />
          </div>
        </form> */}
        </div>
       
      </div>
    </div>
  );
};

export default Contact;

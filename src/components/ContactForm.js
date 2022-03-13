import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';
const ContactForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_vt48en8', 'template_96qox2h', e.target, 'user_vd1oAn8TKrnbuZlTd4J59')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
 
    return (
        <div>
              <form  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange}/>
      <label>Email</label>
    
      <input type="email" name="email" onChange={handleChange}/>
      <label>subject</label>
      <input type="text" name="subject" onChange={handleChange}/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send message" onChange={handleChange}/>
    </form>
   
        </div>
    )
}

export default ContactForm

// import emailjs from "emailjs-com";
// import React from 'react';

// export default function ContactForm() {

//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('service_vt48en8', 'template_96qox2h', e.target, 'user_vd1oAn8TKrnbuZlTd4J59')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//             <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-8 pt-3 mx-auto">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
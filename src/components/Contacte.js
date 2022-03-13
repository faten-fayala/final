import React, { useState,useRef } from 'react'

import emailjs from '@emailjs/browser';
const Result=()=>{
    return(
        <p>you result has been sent, i will contact you soon </p>
    )
}
const Contacte = () => {
const [result, setResult] = useState(false)
// const [timout, setTimout] = useState(0)
const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xanfa2s', 'template_96qox2h', form.current, 'user_vd1oAn8TKrnbuZlTd4J59')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
      };
      //hide result
    //  setTimout( ()=>{
    //       setResult(false)
    //   },5000)
  return (
    <div>
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <div>
          {result ? <Result/>: null}
      </div>
    </form>
    </div>
  )
}

export default Contacte
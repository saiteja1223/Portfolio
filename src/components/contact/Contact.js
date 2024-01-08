import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("fhkj")

    emailjs.sendForm('service_o0ga4ij', 'template_wgc66ya', form.current, 'yCn_eaVlC0lBTNmA8')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("emailsent")
      }, (error) => {
        alert("emailnotsent")
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>I have had the opportunity to work with Hitachi vantara for Intern position as an appliication engineer .  </p>
            <div className='clientImgs'>
                <img src='./Asserts/hitachi.png' alt='' className='clientImg'/>
              
               
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities </span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='your Name ' name='from_name'/>
            <input type='email' className='email' placeholder='Your email' name='from_email'/>
            <textarea name='messege' className='msg' rows="5" placeholder='Your Messege'></textarea>
            <button type='submit' value='send' className='submitBtn'>submit</button>

            <div className='links'>
              
             <img src='./Asserts/instagram.png' alt='' className='link'/>
             <img src='./Asserts/twitter.png' alt='' className='link'/>
               <img src='./Asserts/youtube.png' alt='' className='link'/>
              <img src='./Asserts/facebook-icon.png' alt='' className='link'/></div>
           </form>
        </div>
       
    </section>

  )
}

export default Contact
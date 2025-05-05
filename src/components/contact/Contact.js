import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    messege: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    messege: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = { name: "", email: "", messege: "" };
    let isValid = true;

    if (!userData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (!userData.messege.trim()) {
      newErrors.messege = "Please enter a message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitdetails = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    await emailjs.sendForm(
      'service_o0ga4ij',
      'template_wgc66ya',
      form.current,
      'yCn_eaVlC0lBTNmA8'
    ).then((result) => {
      console.log(result.text);
      alert("Email sent");
      setUserData({ name: "", email: "", messege: "" });
    }, (error) => {
      alert("Email not sent");
      console.log(error.text);
    });
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
          I have had the opportunity to work with Hitachi Vantara for an intern position as an application engineer.
        </p>
        <div className='clientImgs'>
          <img src='./Asserts/hitachi.png' alt='' className='clientImg' />
        </div>
      </div>

      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' onSubmit={submitdetails} ref={form}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='name'
            value={userData.name}
            onChange={handleUserInput}
          />
          {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='email'
            value={userData.email}
            onChange={handleUserInput}
          />
          {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

          <textarea
            name='messege'
            value={userData.messege}
            onChange={handleUserInput}
            className='msg'
            rows="5"
            placeholder='Your Message'
          />
          {errors.messege && <p style={{color:'red'}}>{errors.messege}</p>}

          <button type='submit' className='submitBtn'>Submit</button>

          <div className='links'>
            <img src='./Asserts/instagram.png' alt='' className='link' />
            <img src='./Asserts/twitter.png' alt='' className='link' />
            <img src='./Asserts/youtube.png' alt='' className='link' />
            <img src='./Asserts/facebook-icon.png' alt='' className='link' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

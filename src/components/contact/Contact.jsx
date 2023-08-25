import React from 'react'
import './contact.css'
import {BiLogoGmail} from 'react-icons/bi'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_htakbyf', 'template_brkmwyc', form.current, 'KbHFsRIDu3E06pkA6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiLogoGmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>artinmolaeiforouhar@gmail.com</h5>
            <a href="mailto:artinmolaeiforouhar@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
            <BiSolidMessageRoundedDetail className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>416-576-1692</h5>
            <a href="https://api.whatsapp.com/send?phone=4165761692" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
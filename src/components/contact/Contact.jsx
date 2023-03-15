import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY');
  
    e.target.reset();
  };

  return (
    <section id ="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
              <article className='contact__option'>
                <MdOutlineMail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>test@gmail.com</h5>
                <a href="mailto:test@gmail.com" target="_blank" rel="noreferrer">Send A Message</a>
              </article>
              <article className='contact__option'>
                <RiMessengerLine className='contact__option-icon' />
                <h4>Messenger</h4>
                <h5>test</h5>
                <a href="https://gmail.com" target="_blank" rel="noreferrer">Send A Message</a>
              </article>
              <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon' />
                <h4>Whatsup</h4>
                <h5>test@gmail.com</h5>
                <a href="https://whatsup.com" target="_blank" rel="noreferrer">Send A Message</a>
              </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input name='name' placeholder='Your Full Name' type="text" required />
              <input name='email' type="email" placeholder='Your Email' required />
              <textarea name="message" id="7" cols="30" rows="10" placeholder='Your Message' required></textarea>
              <button className='btn btn-primary' type='submit'>Send Message</button>
            </form>
        </div>

    </section>
  )
}

export default Contact;
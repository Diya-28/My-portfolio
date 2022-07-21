import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icons' />
            <h4>Email</h4>
            <h5>diyajain556@gmail.com</h5>
            <a href="mailto:diyajain556@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FiInstagram className='contact__option-icons' />
            <h4>Instagram</h4>
            <h5>DiyaJain</h5>
            <a href="https://www.instagram.com/d_i_a__28/" target="__blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icons' />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone+9148419558"  target="__blank">Send a Message</a>
          </article>
        </div>
        <form> 
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
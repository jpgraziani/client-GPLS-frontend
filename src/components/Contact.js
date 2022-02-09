import React from 'react'
import Formspree from './Formspree'

const Contact = () => {
  return (
    <section id="contact">
      <div className='service-title section-title-wrapper flex-col-center'>
        <h2>Contact Us</h2> 
        <div className='section-hr' /> 
      </div>
      <Formspree />
    </section>
  )
}

export default Contact


/*
<form action="https://formspree.io/f/mnqwqyap" method="POST" className='contact-form-wrapper grid-cols-1'>   
        <section className='flex-col'>
          <label aria-label='your email' className='label-form' htmlFor="email">Your email</label>

          <input aria-placeholder='enter your email' id='email' className='input-form' type="email" name="email" placeholder="Enter Your Email" required />
          
          <label aria-label='your message' className='label-form' htmlFor="message">Your message</label>
          
          <textarea aria-placeholder='enter your message here' id='message' className='textarea-form' placeholder="How can we help?" name="message" rows="6" required></textarea>
          
          </section>
          <button aria-label='center justified' className='btn-submit' type="submit">Send</button>
      </form>


*/
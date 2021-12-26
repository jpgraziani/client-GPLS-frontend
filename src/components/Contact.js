import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className='service-title section-title-wrapper flex-col-center'>
        {/* <div className='section-hr' /> */}
        <h2>Contact Us</h2> 
        <div className='section-hr' /> 
      </div>
      <form action="https://formspree.io/f/mnqwqyap" method="POST" className='contact-form-wrapper grid-cols-1'>   
        <section className='flex-col'>
          <label className='label-form' htmlFor="_replyto">Your email</label>
          <input className='input-form' type="email" name="_replyto" placeholder="Enter Your Email" required />
          
          <label className='label-form' htmlFor="message">Your message</label>
          <textarea className='textarea-form' placeholder="How can we help?" name="message" rows="6" required></textarea>
          
          </section>
          <button className='btn-submit' type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact

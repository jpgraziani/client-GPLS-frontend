import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mnqwqyap");
  if (state.succeeded) {
      return (
        <section className='grid-cols-1'>
          <p className='form-sent-response section-sub-title'>Thank you for contacting us!</p>
        </section>
      );
  }
  return (
      <form onSubmit={handleSubmit} 
        className='contact-form-wrapper grid-cols-1'>
        <section className='flex-col form-input-wrapper'>
          <label 
            className='label-form'
            htmlFor="email" 
            aria-label='your email'>
            Email Address
          </label>
          <input
            className='input-form'
            aria-placeholder='enter your email'
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label 
            aria-label='your message' 
            className='label-form' 
            htmlFor="message">Your message</label>
          <textarea
            aria-placeholder='enter your message here'
            className='textarea-form'
            id="message"
            name="message"
            placeholder="How can we help?"
            rows="6" 
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
      </section>
      <button aria-label='center justified' className='btn-submit'  type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
const Formspree = () => {
  return (
    <ContactForm />
  );
}
export default Formspree;
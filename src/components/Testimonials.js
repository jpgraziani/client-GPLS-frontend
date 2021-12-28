import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className='testimonials-section grid-cols-1 flex-col-center'>
      <article id='testimonials-article' className='section-text-wrapper'>
        <p className='section-sub-title'>testimonials</p>
        <h3 className='hero-text-h3'>Customer Reviews</h3>
        <blockquote>
          <p>Great people to work with! They were prompt, competitive in pricing, and always communicated throughout. Esgar and his crew were very meticulous with everything and even took the time to explain to me how the irrigation system actually works. Every time the crew stops over I feel like they are always going out of their way to add personal care to my landscaping. I highly recommend Green Patio Landscaping.</p>
            <p className='testimonials-customer flex-col-center'>
              <span className='customer-name'>Jonathan G.</span>
              <span className='customer-date'>Customer Since September 2021</span>
            </p>
        </blockquote>
      </article>
    </section>
  )
}

export default Testimonials

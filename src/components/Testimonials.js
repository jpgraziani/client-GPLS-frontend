import React from 'react'
import Slider from './Slider';

const Testimonials = () => {
  const ReviewData = [
    {
      quote: `"What I like most about Green Patio is the people are easy to talk to and happy to work every day. This is all on top of being meticulous and hard-working. Green Patio is an integral part of my home maintenance team and I never worry about my yard anymore."`,
      name: 'Jason M.'
    },
    {
      quote: `"Great people to work with! They were prompt, competitive in pricing, and always communicated throughout. Esgar and his crew were very meticulous with everything and even took the time to explain to me how the irrigation system actually works. Every time the crew stops over I feel like they are always going out of their way to add personal care to my landscaping. I highly recommend Green Patio Landscaping."`,
      name: 'Jonathan G.'
    }
  ];

  return (
    <section id="testimonials" className='testimonials-section grid-cols-1 flex-col-center'>
      <article id='testimonials-article' className='section-text-wrapper'>
        <p className='section-sub-title'>testimonials</p>
        <h3 className='hero-text-h3'>Customer Reviews</h3>
        <Slider slides={ReviewData} />
      </article>
    </section>
  )
}

export default Testimonials

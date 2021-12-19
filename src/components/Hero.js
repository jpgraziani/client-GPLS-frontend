import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <header id='hero-header' className='grid-cols-1 grid-cols-2'>
      <section className='hero-section flex-col layout-left-justified'>
        <h2 className='hero-text-h2'>Hello, we are Green Patio Landscaping</h2>
        <p>You might say we're obsessed with how we care for the quality of landscapes. We take pride in every landscape as if it was our own.</p>
        <p className='paragraph-br'>Discover how we can help you maintain your landscape oasis.</p>
        
        <div className='links-container'>
          <a className='btn btn-margin-r' href="tel:415.244.5326">call now</a>
          <a className='btn' href="mailto:jpgraziani@gmail.com">e-mail us</a>
        </div>
      </section>
      
      <StaticImage 
        src='../assets/images/house-front.jpg' 
        alt='residental home landscaping desert tucson arizona' 
        className='hero-position-col-2' 
        placeholder='blurred' 
        layout='fullWidth' 
      />
    </header>
  )
}

export default Hero
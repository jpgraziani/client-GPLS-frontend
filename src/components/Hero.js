import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <header id='hero-header' className='grid-cols-1 grid-cols-2'>
      <section className='hero-section flex-col layout-left-justified'>
        <h2 className='hero-text-h2'>Hello, We are Green Patio Landscaping</h2>
        <p>You might say we're obsessed with how we care for the quality of tucson landscapes. We provide the right services you will need to handle all of your landscaping maintenance, lawn and garden care, irrigation systems and landscape masonry needs.
        </p>
        <p className='paragraph-br'>Contact us today to discover how we can help you maintain and care for your landscape oasis.</p>
        
        <div className='links-container'>
          <a className='btn btn-margin-r' href="tel:520.449.2702">call now</a>
          <a className='btn' href="mailto:greenpatiolandscaping@gmail.com">e-mail us</a>
        </div>
      </section>
      
      <StaticImage 
        src='../assets/images/jg-front-home.jpg' 
        alt='residental home landscaping desert tucson arizona' 
        className='hero-position-col-2' 
        placeholder='blurred' 
        layout='fullWidth' 
      />
    </header>
  )
}

export default Hero

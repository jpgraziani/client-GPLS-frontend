import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <section id="about" className='grid-cols-1 grid-cols-2'>
      {/* <div className='about-title-center section-title-wrapper flex-col-center'>
        <h2>About Us</h2>
        <div className='section-hr' />
      </div>   */}
      
      <section className='about-section section-text-wrapper flex-col-center'>
        <p className='section-sub-title'>green patio landscaping</p>
        <h3 className='hero-text-h3'>We Serve our Friends and our Community</h3>
        <p>Our company specializes in landscaping and not every residential lawn is designed the same so our landscaping services will always be tailored for your specific lawn. We take pride in our work and we love building long lasting relationships with our customers.</p>
        <div className='links-container'>
          <a className='btn' href="#contact">book free consultation</a>
        </div>
      </section>
      <StaticImage 
        src='../assets/images/brick-circle-path-tucson-backyard-landscaping.jpg'
        alt='brick-circle-path-tucson-backyard-landscaping'
        className='about-img'
      />
    </section>
  )
}

export default About

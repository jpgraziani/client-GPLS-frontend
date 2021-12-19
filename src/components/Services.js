import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaWater, FaHandHoldingHeart } from 'react-icons/fa'
import { GiHighGrass } from 'react-icons/gi'
import { BsBricks } from 'react-icons/bs'


const Services = () => {
  return (
    <section id="services">
      <div className='service-title section-title-wrapper flex-col-center'>
        {/* <div className='section-hr' /> */}
        <h2>Our Services</h2> 
        <div className='section-hr' /> 
      </div>
      
      <section className='cards-section-wrapper grid-cols-1 grid-cols-2'>
        {/* cards start here */}
        <article className='service-card'>
          <header className='service-header'>
            <div className='circle-icon'>
              <GiHighGrass className='icon-svg' />
            </div>
            <p className='card-title'>Lawn &amp; Garden Care</p>
          </header>
          <StaticImage 
            src='../assets/images/jg-house-front-dark.jpg'
            alt='residental home front landscaping desert tucson arizona'
            placeholder='blurred'
            layout='fullWidth'
            className='service-img'

          />
          <div className='service-footer'>
            <p className='text-lg'>Lawn Care, Tree Trimming, Tree and Shrub Pruning and Weed Control.</p>
          </div>
        </article>
      
        <article className='service-card'>
          <header className='service-header'>
            <div className='circle-icon'>
              <FaWater className='icon-svg' />
            </div>
            <p className='card-title'>Irrigation Services</p>
          </header>
          <StaticImage 
            src='../assets/images/jg-irrigation.jpg'
            alt='residental home front landscaping desert tucson arizona'
            placeholder='blurred'
            layout='constrained'
            className='service-img'
          />
          <div className='service-footer'>
            <p className='text-lg'>Irrigation System Install, Irrigation Repairs and Upkeep, and Water Audits.</p>
          </div>
        </article>

        <article className='service-card'>
          <header className='service-header'>
            <div className='circle-icon'>
              <BsBricks className='icon-svg' />
            </div>
            <p className='card-title'>Landscape Masonry</p>
          </header>
          <StaticImage 
            src='../assets/images/jg-flagstone.jpg'
            alt='residental home front landscaping desert tucson arizona'
            placeholder='blurred'
            layout='fullWidth'
            className='service-img'
          />
          <div className='service-footer'>
            <p className='text-lg'>Flagstone, Brick, Concrete, and Rock Decoration.</p>
          </div>
        </article>

        <article className='service-card'>
          <header className='service-header'>
            <div className='circle-icon'>
              <FaHandHoldingHeart className='icon-svg hand-icon' />
            </div>
            <p className='card-title'>Maintenance</p>
          </header>
          <StaticImage 
            src='../assets/images/jg-front-home.jpg'
            alt='residental home front landscaping desert tucson arizona'
            placeholder='blurred'
            layout='fullWidth'
            className='service-img'
          />
          <div className='service-footer'>
            <p className='text-lg'>Routine Maintenance, Site Clean-ups, Trash Hauling, and Annual Plantings.</p>
          </div>
        </article>
      </section>
      {/* cards end here */}
    </section>
  )
}

export default Services

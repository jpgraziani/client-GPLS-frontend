import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <footer id='footer' className='grid-cols-1 flex-col-center'>
      <h3 className='wordmark-sm'>green patio landcaping</h3>
      <p>Tucson, Arizona</p>
      <a className='phone-link' href="tel:520.449.2702">520.449.2702</a>
      <ul className='footer-links'>
        <li><Link className='links' to="#lawnAndGardenCare">Lawn &amp; Garden Care</Link></li>
        <li><Link className='links' to="#landscapeMasonry"> Landscape Masonry</Link></li>
        <li><Link className='links' to="#irrigationServices">Irrigation Services</Link></li>
        <li><Link className='links' to="#maintenance">Maintenance</Link></li>
      </ul>   
      <div className='legal-copy'>
        <p>@copyright green patio landscaping, LLC {date}</p>
        <p><a href="https://www.graziani.dev">designed and built by graziani.dev</a></p>
      </div> 
    </footer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <footer id='footer' className='grid-cols-1 flex-col-center'>
      <ul className='footer-links flex-row-center'>
        
        <li><Link className='links' to="#services">Services</Link></li>
        <li><Link className='links' to="#about">About</Link></li>
        <li><Link className='links' to="#testimonials">Testimonials</Link></li>
        
      </ul>   
      <div className='legal-copy'>
        <p>@copyright green patio landscaping, LLC {date}</p>
        <p><a href="https://www.graziani.dev">designed and built by graziani.dev</a></p>
      </div> 
    </footer>
  )
}

export default Footer

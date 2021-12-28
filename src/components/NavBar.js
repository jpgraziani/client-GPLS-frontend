import React, {useState} from 'react'
import { Link } from 'gatsby'
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from '../assets/images/green-patio-landscaping-logo.svg'
import '../assets/css/nav.css'

const NavBar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav id='navBar' className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <Logo aria-label='Green Patio Logo' className='logo-svg' />
          </Link>
          <button className='nav-btn' aria-label='Right Align' onClick={()=> setShow(!show)}>
            <span className='hidden'>menu button</span>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={show ? 'nav-links show-links':'nav-links'}>
          <Link aria-label='Section Services' to='#services' className='nav-link' 
            activeClassName='active-link' 
            onClick={()=> setShow(false)}>services</Link>
          <Link aria-label='Section About' to='#about' className='nav-link' 
            activeClassName='active-link'
            onClick={()=> setShow(false)}>about</Link>
          <Link aria-label='Section Testimonials' to='#testimonials' className='nav-link' 
            activeClassName='active-link' 
            onClick={()=> setShow(false)}>testimonials</Link>
          <Link aria-label='Section Contact' to='#contact' className='nav-link' 
            activeClassName='active-link' 
            onClick={()=> setShow(false)}>contact</Link>
        </div>  
      </div>
    </nav>
  )
}

export default NavBar

import React, { Fragment } from 'react'
// import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import '../assets/css/reset.css'
import 'normalize.css'
import '../assets/css/global.css'
import '../assets/css/styles.css'
import '../assets/css/layout.css'

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
}

export default Layout

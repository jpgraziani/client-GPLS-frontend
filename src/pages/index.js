import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

import '../assets/css/layout.css'

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  )
}

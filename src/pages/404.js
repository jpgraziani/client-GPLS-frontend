import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Error = () => {
  return (
    <Layout>
      <main className='error-page'>
        <section className='fourOfour flex-col-center'>
          <h2>404</h2>
          <p>page not found</p>
          <Link to='/' className='btn'>Back to Home Page</Link>
        </section>
      </main>
    </Layout>
  )
}

export default Error

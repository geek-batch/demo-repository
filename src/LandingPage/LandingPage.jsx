import React from 'react'
import './LandingPage.css'
import Header from './components/Header'
import Links from './components/Links'

const LandingPage = () => {
  return (
    <div className="container-fluid p-5 m-0">
      <div className="row p-5">
        <Header />
        <Links />
      </div>
    </div>
  )
}

export default LandingPage

import React from 'react'
import './LandingPage.css'
import Header from './components/Header'
import Links from './components/Links'
import NavbarLandingPage from './components/NavbarLandingPage'

export const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
      <div className="container-fluid p-5 m-0">
        <div className="row p-5">
          <Header />
          <Links />
        </div>
      </div>
    </>
  )
}

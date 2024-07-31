import React from 'react'
import { Link } from 'react-router-dom'
import '../NavbarLandingPage.css'
import logo from '../images/logo.jpeg'

const NavbarLandingPage = () => {
 const logoSrc = {logo}
  const title = (
    <span className="title">
      <span className="title-bold">Truckers</span>
      <span className="title-transparent">Portal</span>
    </span>
  )
  const links = [
    {
      href: '/english',
      text: 'ENGLISH',
    },
    {
      href: '/kyrgyz',
      text: 'KYRGYZ',
    },
  ]

  const buttons = [
    {
      href: '/post',
      text: 'Post',
      className: 'nav-link',
    },
    {
      href: '/login',
      text: 'Log in',
      className: 'nav-link',
    },
    {
      href: '/signup',
      text: 'Sign up',
      className: 'btn btn-primary',
    },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src={logoSrc} alt="Logo" className="logo" /> */}
        <span className="title">{title}</span>
      </div>
      <div className="navbar-center">
        {links.map((link, index) => (
          <Link to={link.href} className="nav-link" key={index}>
            {link.text}
            {index < links.length - 1 && <span className="divider">/</span>}
          </Link>
        ))}
      </div>
      <div className="navbar-right">
        {buttons.map((btn, index) => (
          <Link to={btn.href} className={btn.className} key={index}>
            {btn.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavbarLandingPage

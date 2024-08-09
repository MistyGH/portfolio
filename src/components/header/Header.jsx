import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Artin Molaei-Forouhar</h1>
        <h5 className="text-light">A Third Year Computer Engineering Student at UofT</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Artin Molaei-Forouhar" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>  
      </div>
    </header>
  )
}

export default Header
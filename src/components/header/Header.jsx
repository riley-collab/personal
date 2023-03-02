import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ItsMe from '../../assets/ItsMe.JPG'
import ISSAME from '../../assets/IMG_5627-removebg-preview.png'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    // <header id='home'>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Riley Morris</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        {/* <div className='me'>
            <img src={ISSAME} alt="me" />
        </div> */}

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header

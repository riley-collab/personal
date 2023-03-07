import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="$" className='footer__logo'>Riley Morris</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Experience</a></li>
        {/* <li><a href="">Services</a></li> */}
        <li><a href="">Portfolio</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      {/* <div className='footer__socials'> */}
        {/* <a href="https://www.facebook.com/riley.morris.92"> <FaFacebookF /></a>
        <a href="https://www.instagram.com/itsrieguy/"> <FiInstagram /></a> */}
        {/* <a href="https://twitter.com"><IoLogoTwitter /></a> */}
      {/* </div> */}

      <div className='footer__copyright'>
        <small> &copy; Riley Morris. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer

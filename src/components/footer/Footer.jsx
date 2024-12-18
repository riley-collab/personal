import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="$" className='footer__logo'>Riley Morris</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__copyright'>
        <small> &copy; Riley Morris. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer

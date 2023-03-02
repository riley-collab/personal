import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = props => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/riley-morris-7aa0b1157/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/riley-collab" target="_blank"><FaGithub/> </a>

        </div>
  )
}



export default HeaderSocials
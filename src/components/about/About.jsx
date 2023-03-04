import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import ItsMe from '../../assets/ItsMe.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>

      {/* <h5>Get To Know</h5>
      <h2>About Me</h2> */}

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ItsMe} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>7+ Years Experience</small>

            </article>
            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5> 
              <small>300+ Worldwide</small>

            </article> */}
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>

            </article>
          </div>
          <p>
          I'm Riley Morris, a software engineer based in Canada. 
          I specialize in developing web applications and back-end systems.
          I've been working in the software development industry for over 7 years and have built a wide range of applications for different industries.
          </p>
          <p>I'm passionate about using technology to create solutions to real world problems. 
            I love learning new technologies and taking on challenging projects. 
            My pastimes include: coding, hiking, basketball, and video games.</p>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>

      </div>
    </section>
  )
}

export default About

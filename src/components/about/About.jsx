import React from 'react'
import './about.css'
import ItsMe from '../../assets/ItsMe.JPG'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {

  const yearsOfExp = new Date().getFullYear() - 2019;
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ItsMe} alt="Profile" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{yearsOfExp}+ Years Experience</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
          I'm Riley Morris, a software engineer based in Canada. 
          I specialize in developing web applications and back-end systems.
          I have over over {yearsOfExp} years of software development experience and worked on software applications and data workflows within healthtech and high frequency trading. Most recently I've created solutions for Sanofi's AI Center of Excellence focusing on creating ML and AI Solutions. 
          </p>
          <p>I'm passionate about using technology to create solutions to real world problems. 
            I love learning new technologies and taking on challenging projects. 
            My interests outside of work include: coding, hiking, cars, racing, volleyball, basketball, and video games.</p>
        </div>

      </div>
    </section>
  )
}

export default About

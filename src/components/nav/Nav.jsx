import React, {useRef} from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import { useState } from 'react'
import ScrollHighlightNabbar from './ScrollHighlightNabbar'
import Scrollspy from 'react-scrollspy'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')



  // const navHeader = [
  //   {
  //     // headerTitle: <AiOutlineHome/>,
  //     headerTitle: "Section 1",
      
  //     headerRef: section1Ref,
  //     headerID: ""
  //   },
  //   {
  //     // headerTitle: <AiOutlineUser/>,
  //     headerTitle: "Section 2",

  //     headerRef: section2Ref,
  //     headerID: "about"
  //   },
  //   { 
  //     // headerTitle: <BiBook/>,
  //     headerTitle: "Section 3",

  //     headerRef: section3Ref,
  //     headerID: "experience"
  //   },
  //   {
  //     // headerTitle: <RiServiceLine/>,
  //     headerTitle: "Section 4",

  //     headerRef: section4Ref,
  //     headerID: "services"
  //   },
  //   { 
  //     // headerTitle: <MdWorkOutline/>,
  //     headerTitle: "Section 5",

  //     headerRef: section5Ref,
  //     headerID: "portfolio"
  //   },
  //   { 
  //     // headerTitle: <BiMessageSquareDetail/>,
  //     headerTitle: "Section 6",

  //     headerRef: section6Ref,
  //     headerID: "contact"
  //   }
  // ];

  return (
    <nav>

      {/* <ScrollHighlightNabbar ref={section3Ref} navHeader={navHeader} /> */}


      {/* <Scrollspy items={ ['', 'about', 'experience','services', 'portfolio', 'contact'] } currentClassName="is-current">

        <li> <a href='#'>Section 1</a></li>
        <li> <a href='#about'>Section 2</a></li>
        <li> <a href='#experience'>Section 3</a></li>
        <li> <a href='#services'>Section 4</a></li>
        <li> <a href='#portfolio'>Section 5</a></li>
        <li> <a href='#contact'>Section 6</a></li> */}

      {/* <a href="#" onClick={() => setActiveNav('#')} ><AiOutlineHome/></a> */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      {/* <a href="#"  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> */}

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      {/* </Scrollspy> */}
    </nav>

  )
}

export default Nav


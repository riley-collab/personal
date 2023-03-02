import React from "react";
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Porfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'




const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        <Porfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>

        </>
    )
}

export default App
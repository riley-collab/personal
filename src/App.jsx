import React from "react";
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
/*eslint-disable no-unused-vars*/
import Porfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Carousel from "./components/carousel/Carousel";

const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Carousel/>
        {/* <Porfolio/> */}
        <Contact/>
        <Footer/>
        </>
    )
}

export default App
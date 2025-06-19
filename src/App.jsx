import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

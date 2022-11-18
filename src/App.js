import React from 'react';
import HeroSection from './Components/HeroSection';
import Navbar  from './Components/Navbar';
import SimpleCards from './Components/SimpleCards';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>  
      <Navbar/>
      <HeroSection/>
      <SimpleCards/>
      <About/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

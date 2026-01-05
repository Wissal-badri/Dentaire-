import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Global Styles
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

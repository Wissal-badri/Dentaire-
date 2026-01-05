import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import Logo from '../Common/Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Logo />
        
        <div className="nav-links desktop-only">
          <a href="#accueil">Accueil</a>
          <a href="#docteur">À propos</a>
          <a href="#services">Services</a>
          <a href="#resultats">Galerie</a>
          <a href="#contact" className="btn btn-primary nav-btn">
            Nous contacter <Send size={16} />
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav-panel glass"
          >
            <div className="mobile-links">
              <a href="#accueil" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
              <a href="#docteur" onClick={() => setMobileMenuOpen(false)}>À propos</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#resultats" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
              <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Nous contacter</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

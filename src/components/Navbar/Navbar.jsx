import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import Logo from '../Common/Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['accueil', 'docteur', 'services', 'resultats'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Logo />
        
        <div className="nav-links desktop-only">
          <a 
            href="#accueil" 
            onClick={(e) => handleNavClick(e, 'accueil')}
            className={activeSection === 'accueil' ? 'active' : ''}
          >
            Accueil
          </a>
          <a 
            href="#docteur" 
            onClick={(e) => handleNavClick(e, 'docteur')}
            className={activeSection === 'docteur' ? 'active' : ''}
          >
            À propos
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a 
            href="#resultats" 
            onClick={(e) => handleNavClick(e, 'resultats')}
            className={activeSection === 'resultats' ? 'active' : ''}
          >
            Galerie
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn btn-primary nav-btn"
          >
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
              <a href="#accueil" onClick={(e) => handleNavClick(e, 'accueil')}>Accueil</a>
              <a href="#docteur" onClick={(e) => handleNavClick(e, 'docteur')}>À propos</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
              <a href="#resultats" onClick={(e) => handleNavClick(e, 'resultats')}>Galerie</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-primary">Nous contacter</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

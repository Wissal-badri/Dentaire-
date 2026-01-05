import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Logo from '../Common/Logo';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo />
          <p>Expertise ORL et soins de haute qualité à Casablanca.</p>
        </div>
        
        <div className="footer-nav">
          <h4>Liens</h4>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#docteur">À propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Réseaux</h4>
          <div className="social-icons">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="https://wa.me/212522228068" className="whatsapp-icon"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cabinet Dr. Omar Berrada. Tous droits réservés.</p>
      </div>
    </div>
    
    <a href="https://wa.me/212522228068" className="whatsapp-float" target="_blank" rel="noreferrer">
      <MessageCircle size={32} />
    </a>
  </footer>
);

export default Footer;

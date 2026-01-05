import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Send } from 'lucide-react';
import HeroImg from '../../assets/images/hero.png';
import './Hero.css';

const Hero = () => (
  <section id="accueil" className="hero-section">
    <div className="container grid-2">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-image"
      >
        <div className="image-wrapper">
          <img src={HeroImg} alt="Cabinet Dr. Omar Berrada" />
          <div className="floating-badge badge-top">
            <Award color="var(--primary)" size={20} />
            <span>Spécialiste ORL</span>
          </div>
          <div className="floating-badge badge-bottom">
            <Star color="var(--accent)" size={20} fill="var(--accent)" />
            <span>5.0 Avis Google</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <span className="hero-tag">Cabinet Médical Spécialisé</span>
        <h1>Votre santé <span className="gradient-text">ORL</span> entre les mains d'un expert</h1>
        <p>Expertise, écoute et technologies de pointe pour une prise en charge complète du Dr. Omar Berrada à Casablanca.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Nous contacter <Send size={18} /></a>
          <a href="#services" className="btn btn-secondary">Nos expertises</a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;

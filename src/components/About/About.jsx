import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award } from 'lucide-react';
import DoctorImg from '../../assets/images/doctor.png';
import './About.css';

const About = () => (
  <section id="docteur" className="about-section">
    <div className="container">
      <div className="grid-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <img src={DoctorImg} alt="Dr. Omar Berrada" className="doctor-portrait" />
          <div className="exp-badge">
            <h3>+15</h3>
            <p>ANNÉES D'EXPÉRIENCE</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <span className="subtitle">À PROPOS DU DOCTEUR</span>
          <h2>Dr. Omar Berrada</h2>
          <h3 className="specialty gradient-text">Chirurgien-Spécialiste ORL</h3>
          <p>Maitre de sa spécialité, le Dr. Berrada allie expertise technique et approche humaine pour offrir des soins d'excellence à chaque patient.</p>
          
          <div className="about-stats">
            <div className="stat-card">
              <ShieldCheck className="stat-icon" size={28} />
              <div>
                <h4>Confiance</h4>
                <p>Écoute & Pédagogie</p>
              </div>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" size={28} />
              <div>
                <h4>Patient-First</h4>
                <p>Approche Humaine</p>
              </div>
            </div>
            <div className="stat-card">
              <Award className="stat-icon" size={28} />
              <div>
                <h4>Excellence</h4>
                <p>Soin de Qualité</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;

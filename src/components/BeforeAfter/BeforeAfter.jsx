import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RhinoplastyImg from '../../assets/images/rhinoplasty.png';
import SeptoplastyImg from '../../assets/images/septoplasty.png';
import OtoplastyImg from '../../assets/images/otoplasty.png';
import ClinicImg from '../../assets/images/clinic.png';
import './BeforeAfter.css';

const galleryItems = [
  {
    id: 1,
    title: 'Rhinoplastie',
    description: 'Correction esthétique et fonctionnelle du nez',
    category: 'Chirurgie Esthétique',
    image: RhinoplastyImg
  },
  {
    id: 2,
    title: 'Septoplastie',
    description: 'Redressement de la cloison nasale',
    category: 'Chirurgie Fonctionnelle',
    image: SeptoplastyImg
  },
  {
    id: 3,
    title: 'Otoplastie',
    description: 'Correction des oreilles décollées',
    category: 'Chirurgie Esthétique',
    image: OtoplastyImg
  },
  {
    id: 4,
    title: 'Cabinet Médical',
    description: 'Salle de consultation moderne et équipée',
    category: 'Notre Cabinet',
    image: ClinicImg
  },
  {
    id: 5,
    title: 'Espace Accueil',
    description: 'Un environnement confortable et rassurant',
    category: 'Notre Cabinet',
    image: ClinicImg
  }
];

const BeforeAfter = () => (
  <section id="resultats" className="before-after-section">
    <div className="container">
      <div className="section-title">
        <span className="subtitle">GALERIE</span>
        <h2>Résultats & Cabinet</h2>
        <p>Découvrez notre environnement de soin et quelques interventions réussies.</p>
      </div>
      <div className="scroll-wrapper">
        <div className="results-scroll">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="gallery-card-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-card-overlay">
                  <span className="gallery-category">{item.category}</span>
                  <ArrowRight className="gallery-arrow" size={24} />
                </div>
              </div>
              <div className="gallery-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;

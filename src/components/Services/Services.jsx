import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Star, ShieldCheck, Calendar, ChevronRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: Users, title: "Consultation ORL", desc: "Bilan complet et diagnostic précis pour enfants et adultes." },
    { icon: Award, title: "Chirurgie ORL", desc: "Interventions chirurgicales spécialisées de pointe." },
    { icon: Clock, title: "Troubles Audition", desc: "Examens audiométriques et bilans de l'audition." },
    { icon: Star, title: "Ronflement", desc: "Traitement de l'apnée du sommeil et du ronflement." },
    { icon: ShieldCheck, title: "Vertiges", desc: "Diagnostic et prise en charge des troubles de l'équilibre." },
    { icon: Calendar, title: "Urgences", desc: "Prise en charge rapide des pathologies aiguës." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">NOS EXPERTISES</span>
          <h2>Des soins spécialisés</h2>
          <p>Une gamme complète de solutions médicales et chirurgicales pour votre bien-être.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="service-card"
            >
              <div className="service-icon"><s.icon size={28} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-footer">
                <ChevronRight size={20} className="arrow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

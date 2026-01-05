import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="grid-2">
        <div className="contact-details">
          <span className="subtitle">CONTACT</span>
          <h2>Prendre contact</h2>
          <p className="contact-intro">Une urgence ou une consultation ? Le cabinet est à votre écoute.</p>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="icon-box"><MapPin size={24} /></div>
              <div>
                <h4>Localisation</h4>
                <p>6ème étage bureau 28, 552 Rue de Goulmima, Casablanca 20250</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-box"><Phone size={24} /></div>
              <div>
                <h4>Téléphone</h4>
                <p>05222-28068</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-box"><Clock size={24} /></div>
              <div>
                <h4>Horaires</h4>
                <p>Lun - Ven: 09:00 - 19:00 | Sam: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/212522228068" className="whatsapp-btn-large">
            <MessageCircle size={22} /> Discuter sur WhatsApp
          </a>
        </div>

        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846513366814!2d-7.6322!3d33.589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIwLjQiTiA3wrAzNyc1NS45Ilc!5e0!3m2!1sen!2sma!4v1625484848484!5m2!1sen!2sma" 
            width="100%" height="100%" style={{ border: 0, borderRadius: '30px' }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

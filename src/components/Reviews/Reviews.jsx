import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { name: "Ghizlane Nadim", date: "Il y a 5 mois", text: "Un immense merci au Dr Berrada Omar pour sa gentillesse et son professionnalisme. Il a pris en charge mon fils avec une patience hors du commun.", avatar: "GN" },
    { name: "Karina Imaghri", date: "Il y a 4 mois", text: "C’est de loin le meilleur ORL que j’ai rencontré. Il est très doux, à l’écoute, et prend le temps de tout bien expliquer.", avatar: "KI" },
    { name: "Ibtissam Touil", date: "Il y a 3 mois", text: "Médecin de confiance que je recommande vivement. Il est toujours ponctuel, à l’écoute et bienveillant.", avatar: "IT" },
    { name: "Sara Ich", date: "Il y a 3 mois", text: "Médecin très gentil et professionnel. Il prend le temps nécessaire et ses honoraires sont très corrects.", avatar: "SI" },
    { name: "Cool Cool", date: "Il y a 3 mois", text: "Médecin exceptionnel. L’accueil et le service étaient irréprochables. Merci infiniment !", avatar: "CC" },
    { name: "Kenza Berrada", date: "Il y a 1 an", text: "Nous l'avons contacté un dimanche pour une urgence et il a immédiatement répondu. Une grande reconnaissance.", avatar: "KB" }
  ];

  return (
    <section id="avis" className="reviews-section">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">TÉMOIGNAGES</span>
          <h2>Avis de nos Patients</h2>
          <div className="google-rating">
            <div className="stars">
              {[1,2,3,4,5].map(i => <Star key={i} fill="var(--accent)" color="var(--accent)" size={16} />)}
            </div>
            <strong>5.0</strong>
            <span>(91 avis Google)</span>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="review-card"
            >
              <div className="review-header">
                <div className="avatar">{rev.avatar}</div>
                <div className="rev-info">
                  <h4>{rev.name}</h4>
                  <p>{rev.date}</p>
                </div>
              </div>
              <div className="card-stars">
                {[1,2,3,4,5].map(i => <Star key={i} fill="var(--accent)" color="var(--accent)" size={12} />)}
              </div>
              <p className="review-text">"{rev.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

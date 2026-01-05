import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './Logo.css';

const Logo = () => (
  <div className="logo-container">
    <div className="logo-icon">
      <ShieldCheck size={26} />
    </div>
    <span className="logo-text">Dr. Omar <span className="gradient-text">Berrada</span></span>
  </div>
);

export default Logo;

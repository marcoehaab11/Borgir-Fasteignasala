import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2>Borgir<span>.</span></h2>
          <p>{t('hero.subtitle')}</p>
        </div>
        <div className="footer-contact">
          <h3>{t('nav.contact')}</h3>
          <ul>
            <li><Phone size={18}/> +354 588 2030</li>
            <li><Mail size={18}/> borgir@borgir.is</li>
            <li><MapPin size={18}/> Laugavegur, 101 Reykjavík</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Borgir Fasteignasala. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

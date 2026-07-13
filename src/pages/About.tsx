import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '70vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>{t('nav.about')}</h1>
      <div className="glass" style={{ padding: '2rem', borderRadius: '8px', maxWidth: '800px' }}>
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Your trusted partner in Icelandic real estate</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Borgir Fasteignasala is a premier real estate agency based in Reykjavík, Iceland. We specialize in connecting buyers, sellers, and international investors with premium properties across the country.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          Our team of certified professionals ensures a smooth property transaction whether you are buying a cozy apartment in the city center or a large commercial space.
        </p>
      </div>
    </div>
  );
};
export default About;

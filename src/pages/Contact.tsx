import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>{t('nav.contact')}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Get in Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: '50%' }}>
                <Phone color="var(--color-accent)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Phone</p>
                <p>+354 588 2030</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: '50%' }}>
                <Mail color="var(--color-accent)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Email</p>
                <p>borgir@borgir.is</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: '50%' }}>
                <MapPin color="var(--color-accent)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Office</p>
                <p>Laugavegur, 101 Reykjavík</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
          <p style={{ color: '#666' }}>[ Interactive Map Plate Embedded Here ]</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WhatsAppFloat: React.FC = () => {
  const { language } = useLanguage();
  const message = language === 'is' 
    ? "Hæ Borgir, ég hef áhuga á að fá frekari upplýsingar um..." 
    : "Hi Borgir, I'm interested in learning more about...";
  
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/3545882030?text=${encodedMessage}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 1000,
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={32} />
    </a>
  );
};
export default WhatsAppFloat;

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Sell: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Apartment',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const phoneRegex = /^(\+354\s?)?[4-8]\d{2}[\s-]?\d{4}$/;
    
    if (!formData.name) newErrors.name = language === 'is' ? 'Vinsamlegast fylltu út nafn' : 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = language === 'is' ? 'Gilt netfang krafist' : 'Valid email required';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = language === 'is' ? 'Gilt íslenskt símanúmer krafist' : 'Valid Icelandic phone required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Mock submit
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>{language === 'is' ? 'Takk fyrir' : 'Thank You'}</h2>
        <p style={{ margin: '1rem 0 2rem' }}>{language === 'is' ? 'Við munum hafa samband fljótlega.' : 'We will contact you shortly.'}</p>
        <a href="https://wa.me/3545882030" target="_blank" rel="noreferrer" className="btn btn-primary">Open WhatsApp Now</a>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', maxWidth: '600px', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '1rem' }}>{t('nav.sell')}</h1>
      <p style={{ marginBottom: '2rem' }}>{t('btn.valuation')}</p>

      <form onSubmit={handleSubmit} className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
          <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          {errors.name && <span style={{ color: 'var(--color-error)', fontSize: '0.85rem' }}>{errors.name}</span>}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone (+354)</label>
          <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 588 2030" />
          {errors.phone && <span style={{ color: 'var(--color-error)', fontSize: '0.85rem' }}>{errors.phone}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          {errors.email && <span style={{ color: 'var(--color-error)', fontSize: '0.85rem' }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Property Type</label>
          <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message / Notes</label>
          <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
      </form>
    </div>
  );
};
export default Sell;

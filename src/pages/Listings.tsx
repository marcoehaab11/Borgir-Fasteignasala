import React, { useState } from 'react';
import PropertyCard from '../components/properties/PropertyCard';
import { mockProperties } from '../data/mockProperties';
import { useLanguage } from '../context/LanguageContext';

const Listings: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filteredProperties = filter === 'All' 
    ? mockProperties 
    : mockProperties.filter(p => p.type === filter);

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>{t('nav.listings')}</h1>
      
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['All', 'Apartment', 'House', 'Commercial', 'Land'].map(type => (
          <button 
            key={type} 
            onClick={() => setFilter(type)}
            className={filter === type ? 'btn btn-primary' : 'btn btn-secondary'}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};
export default Listings;

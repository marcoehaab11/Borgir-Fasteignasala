import React from 'react';
import Hero from '../components/home/Hero';
import PropertyCard from '../components/properties/PropertyCard';
import { useLanguage } from '../context/LanguageContext';
import { mockProperties } from '../data/mockProperties';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const featuredProperties = mockProperties.filter(p => p.isFeatured);

  return (
    <div className="home-page">
      <Hero />
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('nav.listings')}</h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/listings" className="btn btn-secondary">{t('btn.viewAll')}</a>
        </div>
      </section>
    </div>
  );
};
export default Home;

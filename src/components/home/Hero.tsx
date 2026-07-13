import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Routing logic to listings would go here
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        
        <form className="hero-search glass" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Leita að eign..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Search size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};
export default Hero;

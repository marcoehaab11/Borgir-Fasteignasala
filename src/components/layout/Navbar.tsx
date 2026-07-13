import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/listings', label: 'nav.listings' },
    { path: '/sell', label: 'nav.sell' },
    { path: '/about', label: 'nav.about' },
    { path: '/contact', label: 'nav.contact' },
  ];

  return (
    <header className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Borgir<span>.</span>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {t(link.label)}
            </Link>
          ))}
          <button className="lang-toggle" onClick={toggleLanguage}>
            <Globe size={18} />
            {language === 'is' ? 'EN' : 'IS'}
          </button>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

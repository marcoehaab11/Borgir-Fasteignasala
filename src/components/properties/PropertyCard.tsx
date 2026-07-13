import React from 'react';
import type { Property } from '../../data/mockProperties';
import { useLanguage } from '../../context/LanguageContext';
import { Maximize, Bed, Bath, MapPin } from 'lucide-react';
import './PropertyCard.css';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { language } = useLanguage();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('is-IS', { style: 'currency', currency: 'ISK', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="property-card glass animate-fade-in">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-price">{formatPrice(property.price)}</div>
      </div>
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="property-neighborhood"><MapPin size={16} /> {property.neighborhood}</p>
        <div className="property-stats">
          <span><Maximize size={16} /> {property.size} m²</span>
          {property.type !== 'Commercial' && (
            <>
              <span><Bed size={16} /> {property.bedrooms}</span>
              <span><Bath size={16} /> {property.bathrooms}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;

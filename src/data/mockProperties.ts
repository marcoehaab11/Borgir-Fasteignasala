export interface Property {
  id: string;
  title: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  neighborhood: string;
  type: 'Apartment' | 'House' | 'Commercial' | 'Land';
  image: string;
  isFeatured: boolean;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Hátún 10, Reykjavík',
    price: 85000000,
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    neighborhood: '105 Reykjavík',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Sæbraut 5, Kópavogur',
    price: 125000000,
    size: 210,
    bedrooms: 4,
    bathrooms: 3,
    neighborhood: '200 Kópavogur',
    type: 'House',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Laugavegur 42',
    price: 150000000,
    size: 90,
    bedrooms: 0,
    bathrooms: 1,
    neighborhood: '101 Reykjavík',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  }
];

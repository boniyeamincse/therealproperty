export type PropertyStatus = 'For Sale' | 'For Rent' | 'For Lease';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  status: PropertyStatus;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
  description?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Glass Apartment',
    location: 'Gulshan 2, Dhaka',
    price: '৳ 3.5 Crore',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    area: '2500 sqft',
    image: '/images/apartment.png',
    description: 'A stunning modern luxury apartment with floor-to-ceiling glass windows offering breathtaking views of the city. Features premium fittings, high-end security, and 2 car parking spaces.'
  },
  {
    id: '2',
    title: 'Modern IT Office Space',
    location: 'Banani, Dhaka',
    price: '৳ 2.5 Lakh/mo',
    type: 'Commercial Space',
    status: 'For Rent',
    area: '4000 sqft',
    image: '/images/office.png',
    description: 'Fully furnished commercial space suitable for IT firms or corporate offices. Includes centralized AC, backup generator, high-speed elevator, and a modern cafeteria.'
  },
  {
    id: '3',
    title: 'Premium Duplex House',
    location: 'Bashundhara R/A, Dhaka',
    price: '৳ 5 Crore',
    type: 'Duplex',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    area: '4500 sqft',
    image: '/images/hero.png',
    description: 'An architectural masterpiece duplex house with a private swimming pool, landscaped garden, and smart home automation.'
  },
  {
    id: '4',
    title: 'Commercial Showroom',
    location: 'Dhanmondi, Dhaka',
    price: '৳ 4 Lakh/mo',
    type: 'Shop',
    status: 'For Lease',
    area: '1500 sqft',
    image: '/images/office.png',
    description: 'Prime ground floor showroom space on the main road, ideal for fashion brands or electronics retail.'
  },
  {
    id: '5',
    title: 'Luxury Penthouse',
    location: 'Gulshan 1, Dhaka',
    price: '৳ 12 Crore',
    type: 'Apartment',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    area: '6000 sqft',
    image: '/images/properties/penthouse.png',
    description: 'A high-end modern luxury penthouse with floor-to-ceiling glass windows offering a stunning sunset view over Dhaka city. Features contemporary furniture, private terrace, and smart home systems.'
  },
  {
    id: '6',
    title: 'Cozy Family Apartment',
    location: 'Uttara Sector 4, Dhaka',
    price: '৳ 45,000/mo',
    type: 'Apartment',
    status: 'For Rent',
    bedrooms: 3,
    bathrooms: 3,
    area: '1800 sqft',
    image: '/images/properties/family-apt.png',
    description: 'A bright and cozy family apartment interior with warm wooden floors, a modern minimal kitchen, and ample sunlight streaming in. Close to schools and parks.'
  },
  {
    id: '7',
    title: 'Modern Co-working Space',
    location: 'Motijheel, Dhaka',
    price: '৳ 1.5 Lakh/mo',
    type: 'Commercial Space',
    status: 'For Lease',
    area: '2500 sqft',
    image: '/images/properties/coworking.png',
    description: 'A sleek modern co-working space interior with glass partitions, ergonomic chairs, indoor plants, and neon lights. Ideal for startups and creative agencies.'
  },
  {
    id: '8',
    title: 'Ready Plot',
    location: 'Purbachal New Town',
    price: '৳ 2 Crore',
    type: 'Land',
    status: 'For Sale',
    area: '5 Katha',
    image: '/images/properties/land.png',
    description: 'A pristine empty plot of green land in a fast-developing suburban area, with a paved road right next to it. Ready for residential construction.'
  }
];

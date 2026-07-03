import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/mockProperties';
import styles from '../page.module.css';

export default function RentProperty() {
  const rentProperties = properties.filter(p => p.status === 'For Rent');

  return (
    <div>
      <HeroSection 
        title="Rent Property" 
        subtitle="Find the perfect rental home or office space."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Properties for Rent" />
          
          <div className={styles.propertyGrid}>
            {rentProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

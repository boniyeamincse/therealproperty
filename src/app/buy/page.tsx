import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/mockProperties';
import styles from '../page.module.css';

export default function BuyProperty() {
  const buyProperties = properties.filter(p => p.status === 'For Sale');

  return (
    <div>
      <HeroSection 
        title="Buy Property" 
        subtitle="Find your permanent address from our verified sale listings."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Properties for Sale" />
          
          <div className={styles.propertyGrid}>
            {buyProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

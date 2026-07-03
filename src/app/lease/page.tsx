import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/mockProperties';
import styles from '../page.module.css';

export default function LeaseProperty() {
  const leaseProperties = properties.filter(p => p.status === 'For Lease');

  return (
    <div>
      <HeroSection 
        title="Lease Property" 
        subtitle="Long-term lease options for commercial and industrial spaces."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Properties for Lease" />
          
          <div className={styles.propertyGrid}>
            {leaseProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

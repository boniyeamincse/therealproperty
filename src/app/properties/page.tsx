import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/mockProperties';
import styles from '../page.module.css';

export default function Properties() {
  return (
    <div>
      <HeroSection 
        title="Browse All Properties" 
        subtitle="Explore our wide range of premium real estate options."
        showSearch={true}
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Available Properties" subtitle="Filter and find the perfect match." />
          
          <div className={styles.propertyGrid}>
            {properties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

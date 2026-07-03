import Link from 'next/link';
import styles from './HeroSection.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showSearch?: boolean;
}

export default function HeroSection({ title, subtitle, backgroundImage = '/images/hero.png', showSearch = false }: HeroProps) {
  return (
    <section 
      className={styles.hero} 
      style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)), url(${backgroundImage})` }}
    >
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={`${styles.title} animate-fade-in`}>{title}</h1>
        <p className={`${styles.subtitle} animate-fade-in`}>{subtitle}</p>
        
        {showSearch && (
          <div className={`${styles.searchBox} glass animate-fade-in`}>
            <div className={styles.searchRow}>
              <input type="text" placeholder="Location (e.g. Gulshan)" className={styles.searchInput} />
              <select className={styles.searchInput}>
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>
              <select className={styles.searchInput}>
                <option value="">Purpose</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="lease">Lease</option>
              </select>
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

export default function Home() {
  const featuredProperties = [
    {
      id: '1',
      title: 'Luxury Glass Apartment',
      location: 'Gulshan 2, Dhaka',
      price: '৳ 3.5 Crore',
      type: 'Apartment',
      status: 'For Sale' as const,
      bedrooms: 4,
      bathrooms: 4,
      area: '2500 sqft',
      image: '/images/apartment.png'
    },
    {
      id: '2',
      title: 'Modern IT Office Space',
      location: 'Banani, Dhaka',
      price: '৳ 2.5 Lakh/mo',
      type: 'Commercial Space',
      status: 'For Rent' as const,
      area: '4000 sqft',
      image: '/images/office.png'
    },
    {
      id: '3',
      title: 'Premium Duplex House',
      location: 'Bashundhara R/A, Dhaka',
      price: '৳ 5 Crore',
      type: 'Duplex',
      status: 'For Sale' as const,
      bedrooms: 5,
      bathrooms: 6,
      area: '4500 sqft',
      image: '/images/hero.png'
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Find Your Dream Property" 
        subtitle="The best real estate platform in Bangladesh to buy, rent, or lease."
        backgroundImage="/images/hero.png"
        showSearch={true}
      />
      
      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Featured Properties" 
            subtitle="Hand-picked exclusive properties by our experts" 
          />
          
          <div className={styles.propertyGrid}>
            {featuredProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--spacing-md)' }}>
            <a href="/properties" className="btn btn-outline">Browse All Properties</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt">
        <div className="container">
          <SectionTitle title="Why Choose The Real Property" />
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Trusted Service</h3>
              <p>We provide transparent and secure property transactions.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✅</div>
              <h3>Verified Listings</h3>
              <p>All our properties are 100% verified by our expert team.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍💼</div>
              <h3>Expert Agents</h3>
              <p>Professional agents to guide you through the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Want to sell your property?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.2rem' }}>
            List your property with us and get the best value in the market.
          </p>
          <a href="/sell-property" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Submit Your Property
          </a>
        </div>
      </section>
    </div>
  );
}

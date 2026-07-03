import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

const services = [
  { slug: 'property-buy', title: 'Property Buy Support', icon: '🏠' },
  { slug: 'property-sale', title: 'Property Sale Support', icon: '🏷️' },
  { slug: 'rental-support', title: 'Rental Property Support', icon: '🔑' },
  { slug: 'lease-management', title: 'Lease Management', icon: '🏢' },
  { slug: 'property-marketing', title: 'Property Marketing', icon: '📢' },
  { slug: 'valuation', title: 'Property Valuation', icon: '💰' },
  { slug: 'legal-support', title: 'Legal Document Support', icon: '⚖️' },
  { slug: 'commercial-consultancy', title: 'Commercial Property Consultancy', icon: '📊' },
];

export default function Services() {
  return (
    <div>
      <HeroSection 
        title="Our Services" 
        subtitle="Comprehensive real estate solutions tailored to your needs."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="What We Offer" />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {services.map(service => (
              <a key={service.slug} href={`/services/${service.slug}`} className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-lg)', textAlign: 'center', display: 'block', textDecoration: 'none', color: 'inherit', transition: 'transform 0.3s' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ color: 'var(--primary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Click to view details and process.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

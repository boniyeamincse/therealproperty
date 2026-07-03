import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div>
      <HeroSection 
        title={serviceName} 
        subtitle="Professional support and expert guidance."
      />
      
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionTitle title="Service Overview" centered={false} />
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Our {serviceName} service is designed to provide you with end-to-end support, ensuring a smooth and hassle-free experience. Whether you are dealing with residential or commercial properties, our team of experts will guide you through every step of the process.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ background: 'var(--bg-main)', padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Benefits</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  <li>Expert guidance and consultation</li>
                  <li>Time and cost efficiency</li>
                  <li>Complete transparency</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
              
              <div style={{ background: 'var(--bg-main)', padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Required Documents</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  <li>National ID / Passport copy</li>
                  <li>Recent photographs</li>
                  <li>Property deeds (if applicable)</li>
                  <li>TIN Certificate</li>
                </ul>
              </div>
            </div>
            
            <SectionTitle title="Request this Service" />
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
              <form style={{ display: 'grid', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input type="tel" placeholder="Phone Number" required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                <textarea placeholder="Describe your requirement..." rows={4} style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

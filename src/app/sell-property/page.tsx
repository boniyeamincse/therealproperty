import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

export default function SellProperty() {
  return (
    <div>
      <HeroSection 
        title="Sell Your Property" 
        subtitle="List your property with The Real Property to get the best market value quickly."
      />
      
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-white)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <SectionTitle title="Submit Property Details" />
            
            <form style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Owner Name</label>
                  <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                  <input type="tel" placeholder="+880 1..." required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Property Title</label>
                <input type="text" placeholder="e.g. 3 Bed Apartment in Banani" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Property Type</label>
                  <select required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}>
                    <option value="">Select Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Expected Price (BDT)</label>
                  <input type="text" placeholder="e.g. 2 Crore" required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Description</label>
                <textarea rows={5} placeholder="Describe the property features, location, and any special amenities..." required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Submit Property</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

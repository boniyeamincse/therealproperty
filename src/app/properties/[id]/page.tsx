import { properties } from '@/data/mockProperties';
import SectionTitle from '@/components/SectionTitle';

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  // In a real app, you would fetch the property by ID from an API
  const { id } = await params;
  const property = properties.find(p => p.id === id) || properties[0];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: 'var(--spacing-xl)' }}>
      {/* Gallery Header */}
      <div style={{ width: '100%', height: '50vh', backgroundImage: `url(${property.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, background: 'var(--accent)', color: 'var(--primary)' }}>{property.status}</span>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, background: 'var(--primary)', color: 'white' }}>{property.type}</span>
              </div>
              <h1 style={{ marginBottom: '0.5rem' }}>{property.title}</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>📍 {property.location}</p>
            </div>
            <div>
              <h2 style={{ color: 'var(--secondary)', fontSize: '2.5rem', margin: 0 }}>{property.price}</h2>
            </div>
          </div>
          
          <hr style={{ margin: '2rem 0', borderColor: 'rgba(0,0,0,0.1)' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            {/* Main Content */}
            <div>
              <SectionTitle title="Description" centered={false} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                {property.description}
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <SectionTitle title="Features" centered={false} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '4px' }}>🛏️ Bedrooms: {property.bedrooms || 'N/A'}</div>
                  <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '4px' }}>🚿 Bathrooms: {property.bathrooms || 'N/A'}</div>
                  <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '4px' }}>📏 Area: {property.area}</div>
                  <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '4px' }}>🚗 Parking: Available</div>
                </div>
              </div>
            </div>
            
            {/* Sidebar Contact */}
            <div>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius-md)' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Contact Agent</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Your Name" required style={{ padding: '0.75rem', borderRadius: '4px', border: 'none' }} />
                  <input type="tel" placeholder="Phone Number" required style={{ padding: '0.75rem', borderRadius: '4px', border: 'none' }} />
                  <textarea placeholder="I am interested in this property..." rows={3} style={{ padding: '0.75rem', borderRadius: '4px', border: 'none' }}></textarea>
                  <button className="btn" style={{ background: 'var(--accent)', color: 'var(--primary)', marginTop: '0.5rem' }}>Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

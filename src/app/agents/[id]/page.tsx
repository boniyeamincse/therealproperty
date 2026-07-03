import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

export default async function AgentDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <HeroSection 
        title="Agent Profile" 
        subtitle="Expert real estate consultant at your service."
      />
      
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                👨‍💼
              </div>
              <h2 style={{ color: 'var(--primary)' }}>Agent Name</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Senior Property Consultant</p>
              
              <div style={{ textAlign: 'left', background: 'var(--bg-main)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ marginBottom: '0.5rem' }}>📞 +880 1711 000000</p>
                <p style={{ marginBottom: '0.5rem' }}>✉️ agent@ariba.com</p>
                <p>🏢 45 Properties</p>
              </div>
            </div>
            
            <div>
              <SectionTitle title="About Agent" centered={false} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                With over 10 years of experience in the Dhaka real estate market, our agent brings unparalleled expertise and local knowledge. Specializing in luxury apartments and commercial spaces, they ensure a seamless and transparent transaction process for every client.
              </p>
              
              <SectionTitle title="Contact Agent" centered={false} />
              <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Your Name" required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  <input type="tel" placeholder="Your Phone" required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  <textarea placeholder="Message" rows={4} style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                  <button className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

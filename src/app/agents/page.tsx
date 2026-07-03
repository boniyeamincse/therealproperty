import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

const agents = [
  { id: '1', name: 'Md. Hasan Ali', designation: 'Senior Property Consultant', phone: '+880 1711 000000', properties: 45, image: '/images/agents/agent-1.png' },
  { id: '2', name: 'Sadia Rahman', designation: 'Lease Specialist', phone: '+880 1722 000000', properties: 32, image: '/images/agents/agent-2.png' },
  { id: '3', name: 'Kamrul Islam', designation: 'Commercial Property Expert', phone: '+880 1733 000000', properties: 28, image: '/images/agents/agent-3.png' },
];

export default function Agents() {
  return (
    <div>
      <HeroSection 
        title="Our Expert Agents" 
        subtitle="Meet the professionals dedicated to finding your perfect property."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Real Estate Agents" />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {agents.map(agent => (
              <div key={agent.id} className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.5rem', overflow: 'hidden', position: 'relative' }}>
                  <Image src={agent.image} alt={agent.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ color: 'var(--primary)' }}>{agent.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{agent.designation}</p>
                <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <p><strong>Phone:</strong> {agent.phone}</p>
                  <p><strong>Properties:</strong> {agent.properties} managed</p>
                </div>
                <a href={`/agents/${agent.id}`} className="btn btn-outline" style={{ width: '100%' }}>View Profile</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

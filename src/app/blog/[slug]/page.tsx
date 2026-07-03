import HeroSection from '@/components/HeroSection';

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div>
      <HeroSection 
        title={title} 
        subtitle="Published on October 15, 2026 | By The Real Property Research"
      />
      
      <section className="section">
        <div className="container">
          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: 'var(--border-radius-lg)', lineHeight: 1.8, color: 'var(--text-dark)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Introduction</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The real estate market in Dhaka is constantly evolving. With new infrastructural developments like the Metro Rail and Elevated Expressway, specific areas are seeing unprecedented growth in property value.
            </p>
            
            <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>Key Trends to Watch</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Whether you are an investor or looking for a permanent residence, understanding these trends is crucial. We have compiled data from the past five years to help you make informed decisions.
            </p>
            <ul style={{ paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              <li>Shift towards gated communities.</li>
              <li>Increased demand for commercial spaces in specialized zones.</li>
              <li>Rise of smart home technologies in luxury apartments.</li>
            </ul>
            
            <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)', margin: '2rem 0' }}>
              "Investing in real estate today is securing your financial future for tomorrow."
            </blockquote>
            
            <p>
              Contact our expert agents today to find the best investment opportunities that align with your financial goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

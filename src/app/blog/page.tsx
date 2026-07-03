import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';

const posts = [
  { slug: 'real-estate-investment-dhaka', title: 'Top Areas for Real Estate Investment in Dhaka', date: 'October 15, 2026', author: 'The Real Property Research', category: 'Investment Tips' },
  { slug: 'buying-first-apartment', title: 'Complete Guide to Buying Your First Apartment', date: 'September 22, 2026', author: 'Md. Hasan Ali', category: 'Property Buying Guide' },
  { slug: 'rental-agreements-bd', title: 'Understanding Rental Agreements in Bangladesh', date: 'August 10, 2026', author: 'Legal Team', category: 'Legal Guide' },
];

export default function Blog() {
  return (
    <div>
      <HeroSection 
        title="Real Estate Blog" 
        subtitle="Insights, tips, and news from the property market."
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Latest Articles" />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {posts.map(post => (
              <div key={post.slug} className="glass" style={{ borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)' }}>
                  Image Placeholder
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{post.category}</span>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>{post.title}</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    <span>📅 {post.date}</span> &nbsp;&nbsp; <span>✍️ {post.author}</span>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <Link href={`/blog/${post.slug}`} className="btn btn-outline" style={{ display: 'block', width: '100%' }}>Read Article</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

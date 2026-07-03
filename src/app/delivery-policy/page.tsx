import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Delivery Policy | The Real Property',
  description: 'Delivery Policy of The Real Property',
};

export default function DeliveryPolicy() {
  return (
    <div className="section" style={{ minHeight: '60vh' }}>
      <div className="container">
        <SectionTitle title="Delivery Policy" subtitle="How we deliver our services and documents" />
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-dark)', lineHeight: '1.8' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-md)' }}>
            <p>
              This is a demo page for the <strong>Delivery Policy</strong>. 
              The actual article content will be provided and updated at a later time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Please check back later for the complete policy details regarding document handovers, key deliveries, and property possession timelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

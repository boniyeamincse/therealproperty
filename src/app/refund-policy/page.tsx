import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Refund Policy | The Real Property',
  description: 'Refund Policy of The Real Property',
};

export default function RefundPolicy() {
  return (
    <div className="section" style={{ minHeight: '60vh' }}>
      <div className="container">
        <SectionTitle title="Refund Policy" subtitle="Our guidelines on refunds and cancellations" />
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-dark)', lineHeight: '1.8' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-md)' }}>
            <p>
              This is a demo page for the <strong>Refund Policy</strong>. 
              The actual article content will be provided and updated at a later time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Please check back later for the complete policy details regarding property transactions, earnest money deposits, and service fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

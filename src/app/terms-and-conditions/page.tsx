import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Terms & Conditions | The Real Property',
  description: 'Terms and Conditions of using The Real Property services',
};

export default function TermsAndConditions() {
  return (
    <div className="section" style={{ minHeight: '60vh' }}>
      <div className="container">
        <SectionTitle title="Terms & Conditions" subtitle="The rules and guidelines for using our platform" />
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-dark)', lineHeight: '1.8' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-md)' }}>
            <p>
              This is a demo page for the <strong>Terms & Conditions</strong>. 
              The actual article content will be provided and updated at a later time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Please check back later for the complete terms detailing user responsibilities, platform usage, and legal agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

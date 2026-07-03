import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Privacy Policy | The Real Property',
  description: 'Privacy Policy of The Real Property',
};

export default function PrivacyPolicy() {
  return (
    <div className="section" style={{ minHeight: '60vh' }}>
      <div className="container">
        <SectionTitle title="Privacy Policy" subtitle="How we handle and protect your data" />
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-dark)', lineHeight: '1.8' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius-md)' }}>
            <p>
              This is a demo page for the <strong>Privacy Policy</strong>. 
              The actual article content will be provided and updated at a later time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Please check back later for the complete details regarding data collection, cookies, and user privacy protections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

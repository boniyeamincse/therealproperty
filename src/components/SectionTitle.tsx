interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: 'var(--spacing-lg)' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{title}</h2>
      {subtitle && <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{subtitle}</p>}
      <div style={{ 
        width: '60px', 
        height: '3px', 
        background: 'var(--accent)', 
        margin: centered ? '1rem auto 0' : '1rem 0 0',
        borderRadius: '2px'
      }} />
    </div>
  );
}

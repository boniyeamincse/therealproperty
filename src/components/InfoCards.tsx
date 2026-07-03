import styles from './InfoCards.module.css';

export default function InfoCards() {
  const cards = [
    {
      title: 'Strategic Location',
      description: 'A Prime Strategic Location Designed To Connect Lifestyle, Accessibility, And Long-Term Real Estate Investment Potential.',
    },
    {
      title: 'Safe & Secure Surroundings',
      description: 'A Safe And Secure Environment Designed To Ensure Peaceful Living, Family Comfort, And Long-Term Confidence.',
    },
    {
      title: '100% Transparent Dealings',
      description: 'Experience 100% Transparent Dealings That Ensure Trust, Accountability, And Peace Of Mind For Every Client.',
    }
  ];

  return (
    <section className={styles.infoSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.welcomeText}>
          WELCOME TO THE REAL PROPERTY
        </div>
      </div>
    </section>
  );
}

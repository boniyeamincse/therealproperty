import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import styles from './page.module.css';

export default function About() {
  return (
    <div>
      <HeroSection 
        title="About The Real Property" 
        subtitle="Building trust and delivering premium real estate solutions in Dhaka."
      />
      
      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <SectionTitle title="Our Story" centered={false} />
            <p className={styles.text}>
              The Real Property is a leading property portfolio and real estate service company based in Dhaka, Bangladesh. We are dedicated to providing seamless property buying, renting, and leasing experiences.
            </p>
            <p className={styles.text}>
              Our mission is to empower individuals and businesses to find their perfect spaces by offering transparent, verified, and high-quality property listings.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/images/about.png" alt="The Real Property Corporate Office" className={styles.image} />
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container">
          <SectionTitle title="Our Core Values" />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.icon}>🤝</div>
              <h3>Trust</h3>
              <p>We believe in building long-term relationships based on honesty and integrity.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>🔍</div>
              <h3>Transparency</h3>
              <p>No hidden fees, no false promises. Just clear and straightforward deals.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>⭐</div>
              <h3>Professionalism</h3>
              <p>Our expert agents provide top-tier service tailored to your needs.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>❤️</div>
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our primary goal and ultimate reward.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <SectionTitle title="Company Statistics" />
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h2 className={styles.statNumber}>1000+</h2>
              <p>Total Properties</p>
            </div>
            <div className={styles.statBox}>
              <h2 className={styles.statNumber}>500+</h2>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statBox}>
              <h2 className={styles.statNumber}>50+</h2>
              <p>Expert Agents</p>
            </div>
            <div className={styles.statBox}>
              <h2 className={styles.statNumber}>10+</h2>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

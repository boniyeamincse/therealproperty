import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerColumn}>
          <h3 className={styles.brandName}>The Real Property</h3>
          <p className={styles.description}>
            Your trusted property portfolio and real estate service company based in Dhaka, Bangladesh. We bring transparency and trust to every deal.
          </p>
        </div>
        
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerColumn}>
          <h4>Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/buy">Buy Property</Link></li>
            <li><Link href="/rent">Rent Property</Link></li>
            <li><Link href="/lease">Lease Management</Link></li>
            <li><Link href="/sell-property">Sell Property</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerColumn}>
          <h4>Newsletter</h4>
          <p className={styles.newsletterText}>Subscribe to get the latest property updates.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} The Real Property. All rights reserved.</p>
      </div>
    </footer>
  );
}

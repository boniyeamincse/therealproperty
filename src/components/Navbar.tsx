import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Image src="/images/logo/logo.png" alt="The Real Property Logo" width={40} height={40} />
            <span className={styles.brandName}>The Real Property</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/buy">Buy</Link>
          <Link href="/rent">Rent</Link>
          <Link href="/lease">Lease</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.navActions}>
          <a href="tel:09639959595" className={styles.callSalesBox}>
            <div className={styles.callIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <div className={styles.callTextWrapper}>
              <span className={styles.callLabel}>Call Sales</span>
              <span className={styles.callNumber}>09639 95 95 95</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

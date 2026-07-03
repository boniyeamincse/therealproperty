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
          <Link href="/sell-property" className="btn btn-primary">Sell Property</Link>
        </div>
      </div>
    </header>
  );
}

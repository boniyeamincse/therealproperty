import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceDetails.module.css';

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const serviceImage = '/images/products/69707e8ab33b3.jpg';

  const description = 'Golden Eye Developers Limited Offers Well-Planned Commercial Plots With Clear Documentation And Strong Future Value.';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{serviceName}</h1>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.buttonGroup}>
        <Link href="/" className={styles.btnBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        <a href="mailto:info@realpropertiesbd.com" className={styles.btnMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Message
        </a>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '4rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <Image 
          src={serviceImage} 
          alt={serviceName} 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className={styles.pillContainer}>
        <div className={styles.pill}>{serviceName}</div>
      </div>
      
      <p className={styles.tableOverview}>Phase-Wise Block & Current Price Overview</p>
      
      <div className={styles.tableWrapper}>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>Phase Number</th>
              <th>Block Name</th>
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phase – 1</td>
              <td>Block-A, G, H</td>
              <td className={styles.priceText}>2,400,000 BDT / Per Katha</td>
            </tr>
            <tr>
              <td>Phase – 1</td>
              <td>Others</td>
              <td className={styles.priceText}>2,400,000 BDT / Per Katha</td>
            </tr>
            <tr>
              <td>Phase – 2</td>
              <td>All</td>
              <td className={styles.priceText}>2,200,000 BDT / Per Katha</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

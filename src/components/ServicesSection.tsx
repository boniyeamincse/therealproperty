import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Commercial Plot (Others)',
      slug: 'commercial-plot',
      description: 'Golden Eye Developers Limited Offers Well-Planned Commercial Plots With Clear Documentation And Strong Future Value.',
      image: '/images/products/69707e8ab33b3.jpg'
    },
    {
      title: 'Residential Plot (Corner)',
      slug: 'residential-plot-corner',
      description: 'Golden Eye Developers Limited Offers Well-Planned Residential Plots With Clear Documentation And Strong Future Value.',
      image: '/images/products/69707e8ab33b3.jpg'
    },
    {
      title: 'Residential Plot (South)',
      slug: 'residential-plot-south',
      description: 'Golden Eye Developers Limited Offers Well-Planned, South-Facing Residential Plots With Clear Documentation And Strong Future Value.',
      image: '/images/products/69707e8ab33b3.jpg'
    }
  ];

  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.subtitle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M2 15h10"></path>
              <path d="M9 18l3-3-3-3"></path>
            </svg>
            EXPLORE BY CATEGORY
          </div>
          <h2 className={styles.title}>Browse Our Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.serviceCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.cardFooterLine}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import styles from './PropertyCard.module.css';

interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  status: 'For Sale' | 'For Rent' | 'For Lease';
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
}

export default function PropertyCard({ id, title, location, price, type, status, bedrooms, bathrooms, area, image }: PropertyProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Using standard img instead of Next Image for simplicity with placeholder URLs, in production use next/image */}
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagStatus}`}>{status}</span>
          <span className={`${styles.tag} ${styles.tagType}`}>{type}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>📍 {location}</p>
        <p className={styles.price}>{price}</p>
        
        <div className={styles.features}>
          {bedrooms && <span>🛏️ {bedrooms} Beds</span>}
          {bathrooms && <span>🚿 {bathrooms} Baths</span>}
          <span>📏 {area}</span>
        </div>
        
        <div className={styles.actions}>
          <Link href={`/properties/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      <a href="tel:+8801234567890" className={`${styles.floatBtn} ${styles.callBtn}`} aria-label="Call Us">
        📞
      </a>
      <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className={`${styles.floatBtn} ${styles.whatsappBtn}`} aria-label="WhatsApp">
        💬
      </a>
    </div>
  );
}

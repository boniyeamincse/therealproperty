import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import styles from './page.module.css';

export default function Contact() {
  return (
    <div>
      <HeroSection 
        title="Contact Us" 
        subtitle="Get in touch with our expert real estate agents today."
      />
      
      <section className="section">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.infoSection}>
            <SectionTitle title="Contact Information" centered={false} />
            
            <div className={styles.infoBox}>
              <h4>Head Office</h4>
              <p>The Real Property<br />Gemcon Business Center, Floor 8,<br />Malibagh, Dhaka, Bangladesh</p>
            </div>
            
            <div className={styles.infoBox}>
              <h4>Phone</h4>
              <p>+880 1234 567 890</p>
            </div>
            
            <div className={styles.infoBox}>
              <h4>Email</h4>
              <p>info@realpropertiesbd.com</p>
            </div>
            
            <div className={styles.infoBox}>
              <h4>Office Hours</h4>
              <p>Sunday - Thursday: 9:00 AM - 6:00 PM<br />Friday & Saturday: Closed</p>
            </div>
          </div>
          
          <div className={styles.formSection}>
            <div className={`glass ${styles.contactForm}`}>
              <h3>Send us a message</h3>
              <form>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input type="tel" placeholder="Your Phone Number" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container">
          <SectionTitle title="Find Us on Map" />
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70031269382!2d90.404284!3d23.794628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

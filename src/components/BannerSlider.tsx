"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './BannerSlider.module.css';

const banners = [
  '/images/banners/banner_1_1783098065344.png',
  '/images/banners/banner_2_1783098077952.png',
  '/images/banners/banner_3_1783098090851.png',
  '/images/banners/banner_4_1783098101870.png',
  '/images/banners/banner_5_1783098113943.png'
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {banners.map((banner, index) => (
        <div 
          key={index} 
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image 
            src={banner} 
            alt={`Real Estate Banner ${index + 1}`} 
            fill 
            priority={index === 0}
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay}></div>
        </div>
      ))}
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

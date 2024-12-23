import React, { useRef, useEffect } from 'react';
import styles from "../styles/Carousel.module.css";

const Carousel: React.FC = () => {
  const images = [
    '/imgcarousel/1.jpg',
    '/imgcarousel/3.png',
    '/imgcarousel/4.jpg',
    '/imgcarousel/5.jpg',
    '/imgcarousel/6.jpg',
    '/imgcarousel/7.jpg',
    '/imgcarousel/8.jpg',
    '/imgcarousel/11.jpg',
    '/imgcarousel/12.jpg',
    '/imgcarousel/13.jpg',
    '/imgcarousel/15.jpg',
    '/imgcarousel/16.jpg',
    '/imgcarousel/17.jpg',
    '/imgcarousel/18.jpg',
    '/imgcarousel/19.jpg',
    '/imgcarousel/20.jpg',
    '/imgcarousel/21.jpg',
    '/imgcarousel/22.jpg'
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; 
    const scrollInterval = 20; 

    const scrollImages = () => {
      if (!container) return;

      scrollAmount += scrollStep;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scrollImages, scrollInterval);
    return () => clearInterval(interval); 
  }, []);

  const repeatedImages = [...images, ...images];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselImageContainer} ref={containerRef}>
        {repeatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={styles.carouselImage}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

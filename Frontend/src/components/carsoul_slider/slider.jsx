import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import image1 from '../../images/slider_image1.jpg';
import image2 from '../../images/slider_image2.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slider}>
      <button
        className={styles.prev}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />
      <button
        className={styles.next}
        onClick={handleNext}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;

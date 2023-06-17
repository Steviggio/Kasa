import React, { useState } from 'react';
import './Carousel.scss'


function Carousel({ images }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const goToPreviousImage = () => { setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length) }
    ;

  return (
    <div className='carousel-container'>
      <span onClick={goToPreviousImage} className='carousel-arrow left-arrow'></span>
      <img src={images} className='carousel-img'></img>
      <span onClick={goToNextImage} className='carousel-arrow right-arrow'></span>
    </div>
  )
}

export default Carousel
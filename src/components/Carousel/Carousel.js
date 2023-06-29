import React, { useState } from 'react';
import './Carousel.scss';
import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png'

function Carousel({ pictures }) {
  const pictureLength = pictures.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % pictureLength);
  };

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + pictureLength) % pictureLength);
  };


  return (
    <div className='carousel-container'>
      {pictureLength > 1 && <img src={leftArrow} className='arrows left-arrow' alt="Left arrow" onClick={handlePrevImage} />}
      <img src={pictures[activeIndex]} className='carousel-img' alt='flat' />
      {pictureLength > 1 && <img src={rightArrow} className='arrows right-arrow' alt='Right arrow' onClick={handleNextImage} />}
    </div>
  );
}

export default Carousel;

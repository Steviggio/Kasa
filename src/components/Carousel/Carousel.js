import React, { useState } from 'react';
import './Carousel.scss';
// import Flats from '../assets/data/data.json'

function Carousel({pictures}) {

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
      {
        pictureLength > 1 && <div className='left-arrow' onClick={handlePrevImage} />
      }
      {
        pictures.map((picture, flat_id) => {
          return (
            <img key={flat_id} src={picture} className='carousel-img' alt='flat' />
          )
        })
      }
      {
        pictureLength > 1 && <div className='right-arrow' onClick={handleNextImage} />
      }
    </div>
  );
}

export default Carousel
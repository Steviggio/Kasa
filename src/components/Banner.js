import React from 'react';
import '../Banner.scss'


// Ajouter les éléments background et text en pré-requis de Banner
function Banner() {
  return (
    <>
      <div className='banner-container'>
        <img className='banner-back-img'  alt='Kasa Logo' />
        <span className='banner-text'>Chez vous rien à voir</span>
      </div>
    </>
  )
}

export default Banner
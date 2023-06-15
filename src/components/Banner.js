import React from 'react';
import '../Banner.scss'
import Home from "../assets/img/home-img.png"

// Ajouter les éléments background et text en pré-requis de Banner - Pas encre effectué
function Banner() {
  return (
    <div className='banner-container'>
      <img src={Home} className='banner-back-img' alt='Kasa Logo' />
      <div className='banner-shadow'></div>
      <span className='banner-text'>Chez vous, rien à voir</span>
    </div>
  )
}

export default Banner
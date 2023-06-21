import React from 'react';
import './Banner.scss'


// Ajouter les éléments background et text en pré-requis de Banner - Pas encre effectué
function Banner({cover, text}) {
  return (
    <div className='banner-container'>
      <img src={cover} className='banner-back-img' alt='Banner img' />
      <div className='banner-shadow'></div>
      <span className='banner-text' >{text}</span>
    </div>
  )
}

export default Banner
import React from "react";
import './Tiles.scss'

// élement image et text à rajouter en tant qu'argument de la fonction Tile
function Tile({ id, image, text }) {
  return (
    <div className='tiles-container' id={id}>
      <img className='tiles-img' src={image} alt='Tiles' />
      <div className='tiles-shadow' />
      <span className='tiles-title'>{text}</span>
    </div>
  )
}

export default Tile
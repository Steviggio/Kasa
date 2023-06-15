import React from "react";
import './Tiles.scss'
import Test from '../assets/img/Rectangle.png'


// élement image et text à rajouter en tant qu'argument de la fonction Tile
function Tile(image, text) {
  return (
    <div className='tiles-container'>
    <img className='tiles-img' src={Test} />
    <div className='tiles-shadow'></div>
    <span className='tiles-title'>Titre de la location</span>
  </div>
  )
}

export default Tile
import React from 'react';
import './Home.scss'
import RentList from '../assets/data/data.json'
import Banner from './Banner'
import Tile from './Tiles'

// Tiles aspect need to change the code from to another file
function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='rent-container'>
        <Tile /> <Tile /> <Tile /> <Tile /> <Tile /> 
      </div>
    </div>
  )
}

export default Home
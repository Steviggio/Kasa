import React from 'react';
import './Home.scss';
import Flats from '../assets/data/data.json';
import Banner from './Banner';
import Tile from './Tiles';
import Photo from "../assets/img/home-img.png";

// Home page of the App
function Home() {
  return (
    <div className='home'>
      <Banner cover={Photo} />
      <div className='rent-container'>
        {Flats.map((flat) => (
          <Tile
            key={flat.id}
            image={flat.cover}
            text={flat.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

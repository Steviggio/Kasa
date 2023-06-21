import React from 'react';
import './Home.scss';
import Flats from '../../assets/data/data.json';
import Banner from '../../components/Banner/Banner';
import Tile from '../../components/Tiles/Tiles';
import Photo from "../../assets/img/home-img.png";
import { NavLink } from 'react-router-dom';

// Home page of the App
function Home() {
  return (
    <div className='home'>
      <Banner cover={Photo} text="Chez vous, partout et ailleurs"/>
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

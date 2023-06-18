import React from 'react';
import 'Flat.scss';
import Dropdown from './Dropdown';
import Carousel from './Carousel';
import Flats from '../assets/data/data.json';

function Flat() {
  return (
    <div>
      <Carousel images={Flats.map((flat) => (flat.pictures))} key={Flats.map((flat))}/>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <div>
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  )
}

export default Flat
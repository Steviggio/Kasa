import React from 'react';
import 'Flat.scss';
import Dropdown from './Dropdown';
import Carousel from './Carousel';


function Flat() {
  return (
    <div>
      <Carousel />
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
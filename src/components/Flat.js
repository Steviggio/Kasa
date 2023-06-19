import React from 'react';
import 'Flat.scss';
import Dropdown from './Dropdown';
import Carousel from './Carousel';
import Flats from '../assets/data/data.json';
import Tag from './Tag';

function Flat(id) {
  return (
    <div className='carousel-container'>
      <Carousel images={Flats.map((flat) => (flat.pictures))} key={Flats.map((flat) => (flat.id))} />
      <div>
        <div>
          <h1>Titre de l'appartement</h1>
          <span>localisation de l'appartement</span>
        </div>
        <div className='host-informations'>
          <span>Nom de l'hote</span>
          <img>image de l'hôte</img>
        </div>
      </div>
      <div className='tag-stars-container'>
        <div className='tag-container'>
          {/* Itération sur les tag présents dans la liste associé à  l'appartement */}
          {Flats.map((flat) => <Tag tag={flat.tag} id={flat.id} />)}
        </div>
        <div className='stars-container'></div>
      </div>
      <div className='dropdown-container'>
        <Dropdown title='Description' description={Flats.map((flat) => (flat.description))} />
        <Dropdown title='Équipements' description={Flats.map((flat) => (flat.equipments))} />
      </div>
    </div>
  )
}

export default Flat
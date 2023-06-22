import React from 'react';
import './Flat.scss';
import { useParams, Navigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
import Carousel from '../../components/Carousel/Carousel';
import Flats from '../../assets/data/data.json';
import Tag from '../../components/Tag/Tag';

function Flat() {

  const id = useParams();
  const flat = Flats.find((flat) => (flat.id === id.id))

  const flatTag = flat?.tags.map((tags, index) => {
    return <Tag key={index} tag={tags} />
  })


  return (
    <>
      <div className='carousel-flat-container'>
        <Carousel pictures={flat.pictures} />
        <div>
          <div>
            <h1>Titre de l'appartement</h1>
            <span>localisation de l'appartement</span>
          </div>
          <div className='host-informations'>
            <span>Nom de l'hote</span>
            {/* <img alt='Host portrait'>image de l'hôte</img> */}
          </div>
        </div>
        <div className='tag-stars-container'>
          <div className='flat-tag-container'>
            {/* Itération sur les tag présents dans la liste associé à  l'appartement */}
            {flatTag}
          </div>
          <div className='stars-container'></div>
        </div>
        <div className='dropdown-container'>
          {/* <Dropdown title='Description' description={Flats.map((flat) => (flat.description))} />
        <Dropdown title='Équipements' description={Flats.map((flat) => (flat.equipments))} /> */}
        </div>
      </div>

    </>
  )
}

export default Flat
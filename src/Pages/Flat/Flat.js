import React from 'react';
import './Flat.scss';
import { useParams, Navigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Carousel from '../../components/Carousel/Carousel';
import Flats from '../../assets/data/data.json';
import Tag from '../../components/Tag/Tag';

function Flat() {

  const id = useParams();
  const flat = Flats.find((flat) => (flat.id === id.id))

  const flatTag = flat?.tags.map((tags, index) => {
    return <Tag key={index} tag={tags} />
  })

  const equipments = flat?.equipments.map((equipment, index) =>{
  return <li key={index}>{equipment}</li>})

  return (
    <>
      <div className='carousel-flat-container'>
        <Carousel pictures={flat.pictures} />
        <div>
          <div className='flat-informations'>
            <h2 className='flat-informations-title'>{flat.title}</h2>
            <span className='flat-informations-location'>{flat.location}</span>
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
          <div className='stars-container'>Stars</div>
        </div>
        <div className='flat-dropdown-container'>
        <Dropdown className='dropdown-bars' title='Description' description={flat.description} />
        <Dropdown className='dropdown-bars' title='Équipements' description={equipments} />
        </div>
      </div>

    </>
  )
}

export default Flat
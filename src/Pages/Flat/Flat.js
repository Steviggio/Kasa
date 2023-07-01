import './Flat.scss';
import { useParams, Navigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Carousel from '../../components/Carousel/Carousel';
import Flats from '../../assets/data/data.json';
import Tag from '../../components/Tag/Tag';
import FullStar from "../../assets/img/full-star.png";
import EmptyStar from "../../assets/img/empty-star.png";

function Flat() {

  const id = useParams();
  const flat = Flats.find(flat => flat.id === id.id)

  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} src={FullStar} alt='Full Star' />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src={EmptyStar} alt='Empty Star' />)
    }

    return stars;
  }


  const flatTag = flat?.tags.map((tag, index) => {
    return <Tag key={index} tag={tag} />;
  });

  const equipments = flat?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });




  return (
    <>
      {flat ? (
        <div className='carousel-flat-container'>
          <Carousel pictures={flat?.pictures} />
          <div className='flat-host-container'>
            <div className='flat-informations'>
              <h2 className='flat-informations-title'>{flat?.title}</h2>
              <span className='flat-informations-location'>{flat?.location}</span>
              <div className='flat-tag-container'>
                {/* Itération sur les tag présents dans la liste associé à  l'appartement */}
                {flatTag}
              </div>
            </div>
            <div className='host-stars-informations'>
              <div className='host-informations'>
                <span>{flat?.host.name}</span>
                <img alt='Host portrait' src={flat?.host.picture} />
              </div>
              <div className='stars-container'>{generateStars(Number(flat?.rating))}</div>
            </div>
          </div>
          <div className='flat-dropdown-container'>
            <Dropdown title='Description' description={flat?.description} />
            <Dropdown title='Équipements' description={equipments} />
          </div>
        </div>) : <Navigate replace to='/Error' />
      }
    </>
  )
}

export default Flat
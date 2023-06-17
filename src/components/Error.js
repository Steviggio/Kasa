import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.scss'


function Error() {
  return (
    <div className='error-div'>
      <h1 className='error-number'>404</h1>
      <span className='error-text'>Oups! La page que vous demandez n'existe pas.</span>
      <NavLink to='/' className='error-navlink'>Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default Error
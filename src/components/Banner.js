import React from "react"
import Logo from "./assets/img/LOGO.png"
import { NavLink } from "react-router-dom";


const Banner = () => {
  <>
    <div>
      <img
        src={Logo}
        alt='Kasa Logo'
      />
      <nav>
        <NavLink>Accueil</NavLink>
        <NavLink>A propos</NavLink>
      </nav>
    </div>
  </>
};

export default Banner;
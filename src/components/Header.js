import React from "react"
import logo from "../assets/img/Logo.png"
import { NavLink } from "react-router-dom";
import "./Header.scss"


function Header() {
  return (
    <>
      <header>
        <img src={logo} alt='Kasa Logo' />
        <nav>
          <NavLink className="nav-link">Accueil</NavLink>
          <NavLink className="nav-link">A propos</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
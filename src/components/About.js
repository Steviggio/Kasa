import React from "react";
import Banner from './Banner';
import aboutImage from "../assets/img/about-img.png";
import Dropdown from "./Dropdown";

function About() {
  return (
    <div className="about">
      <Banner cover={aboutImage} text='' />
      <div className="about-container">
        <Dropdown title={"Fiabilité"} description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"} />
        <Dropdown title={"Respect"} description={"La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
        <Dropdown title={"Service"} description={"La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
        <Dropdown title={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."}/>

      </div>
    </div>
  )
}

export default About
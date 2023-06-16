import React from "react";
import Banner from './Banner';
import aboutImage from "../assets/img/about-img.png";
import './About.scss';

function About() {
  return (
    <div className="about">
      <Banner cover={aboutImage} text=''/>
      <div className="about-container">
    
      </div>
    </div>
  )
}

export default About
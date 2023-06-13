import React from "react";
import white from "../assets/img/white-logo.png"
import "./Footer.scss"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <img src={white} className="footer-logo" alt="White Kasa's logo "></img>
          <p className="footer-text">&copy; 2022 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
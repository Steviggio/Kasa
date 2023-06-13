import React from "react";
import White from "../assets/img/footer-logo.png"
import "./Footer.scss"

function Footer () {
  return (
    <footer>
      <div className="footer-container">
        <img src={White} className="footer-logo" alt="White Kasa's logo "></img>
        <p className="footer-text">&copy; 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
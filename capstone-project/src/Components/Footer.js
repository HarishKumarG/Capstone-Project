// src/components/Footer.js
import React from "react";
import image from './Logo.jpg'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer-image">
          <img src={image} alt="" />
        </div>
        <div className="Footer-copyright">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
        <div className="Footer-text">
          <h2>Little Lemon Restaurant</h2>
          <h5>Lemon-infused delights for you</h5>
          <p>Chicago</p>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

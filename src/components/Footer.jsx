import React from "react";
import "../style/module.footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="./logo2.png" alt="footer logo" />
        <p>Our vision is to make all people the best place to live for them.</p>
      </div>

      <div className="second_wrapper">
        <div>
          <h1>Information</h1>
          <span>Kathmandu, Nepal</span>
        </div>
        <ul>
          <li>Property</li>
          <li>Services</li>
          <li>Product</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/hand_icon.png";
import arrow_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/arrow.png";
import hero_img from "../Assets/Ecommerce_Frontend_Assets/Assets/hero_image.png";

const Hero = () => {
  return (
    <div classname="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="" />
        </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

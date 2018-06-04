import React from 'react';
import RestaurantLogo from './RestaurantLogo.js';

const Hero = (props) => (
  <div className="hero">
    <div className="hero__overlay">
      <RestaurantLogo />
      <h1>{ props.page_title }</h1>
    </div>

    <img className="hero__image fluid-image" src={ `/images/${props.page_hero_image}` } />
  </div>
);

export default Hero;

import React from 'react';
import RestaurantLogo from './RestaurantLogo.js';

const Hero = (props) => (
  <div className="hero">
    <div className="hero__overlay">
      <RestaurantLogo />
      <h1>{ props.page_title }</h1>
    </div>

    <img className="hero__image hidden-device fluid-image" src={ `/images/${props.page_hero_image}` } />
    <img className="hero__image_mobile hidden-desktop fluid-image" src={`/images/${props.page_hero_image_mobile}`} />
  </div>
);

export default Hero;

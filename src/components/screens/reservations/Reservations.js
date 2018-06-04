import React from 'react';
import Hero from '../../common/Hero.js';

class Reservations extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="Reservations"
          page_hero_image="/reservations_hero.jpg"
        />
      </div>
    );
  }
}

export default Reservations;

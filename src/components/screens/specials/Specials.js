import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';

class Specials extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="Specials"
          page_hero_image="/specials_hero.jpg"
        />

        <Header />
      </div>
    );
  }
}

export default Specials;

import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';

class Menu extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="Menu"
          page_hero_image="/menu_hero.jpg"
        />

        <Header />
      </div>
    );
  }
}

export default Menu;

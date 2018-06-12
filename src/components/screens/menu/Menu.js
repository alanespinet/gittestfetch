import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import Footer from '../../common/Footer.js';
import Main from '../../common/Main.js';
import MenuBreakfast from './MenuBreakfast';
import MenuLunch from './MenuLunch';
import MenuDinner from './MenuDinner';
import MenuDrinks from './MenuDrinks';

class Menu extends React.Component {
  render(){
    return (
      <div className="menu">
        <Hero
          page_title="Menu"
          page_hero_image="/menu_hero.jpg"
        />

        <Header />

        <Main>
          <MenuBreakfast />
          <MenuLunch />
          <MenuDinner />
          <MenuDrinks />
        </Main>

        <Footer />
      </div>
    );
  }
}

export default Menu;

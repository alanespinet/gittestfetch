import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import Footer from '../../common/Footer.js';
import Main from '../../common/Main.js';
import SpecialsIntro from './SpecialsIntro';
import SpecialsCardsBlock from './SpecialsCardsBlock';

class Specials extends React.Component {
  render(){
    return (
      <div className="specials">
        <Hero
          page_title="Specials"
          page_hero_image="/specials_hero.jpg"
        />

        <Header />

        <Main>
          <SpecialsIntro />
          <SpecialsCardsBlock />
        </Main>

        <Footer />
      </div>
    );
  }
}

export default Specials;

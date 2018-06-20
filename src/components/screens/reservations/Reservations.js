import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import HeaderMobile from '../../common/HeaderMobile.js';
import Footer from '../../common/Footer.js';
import Main from '../../common/Main.js';
import ReservationsIntro from './ReservationsIntro';
import ReservationsForm from './ReservationsForm';

class Reservations extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="Reservations"
          page_hero_image="/reservations_hero.jpg"
          page_hero_image_mobile="/reservations_hero_mobile.jpg"
        />

        <Header />
        <HeaderMobile />

        <Main>
          <ReservationsIntro />
          <ReservationsForm />
        </Main>

        <Footer />
      </div>
    );
  }
}

export default Reservations;

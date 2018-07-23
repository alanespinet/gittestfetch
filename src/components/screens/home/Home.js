import React from 'react';
import { NavLink } from 'react-router-dom';

import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import HeaderMobile from '../../common/HeaderMobile.js';
import Footer from '../../common/Footer.js';
import Main from '../../common/Main.js';
import SectionContent from '../../common/SectionContent.js';
import HomeGallery from './HomeGallery';
import HomeCousine from './HomeCousine';
import HomeLocation from './HomeLocation';
import HomeReservation from './HomeReservation';


class Home extends React.Component {
  render() {
    return (
      <div className="view-element">
        <Hero
          page_title="React-ive Restaurant"
          page_hero_image="/home_hero.jpg"
          page_hero_image_mobile="/home_hero_mobile.jpg"
        />

        <Header />
        <HeaderMobile />

        <Main>
          <SectionContent section_title="Welcome">
            <div className="container">
              <div className="home-intro-wrapper">
                <p>Welcome to 'React-ive Restaurant': A case of study created in React JS that simulates the web application for a whole restaurant. The application is divided into two sections: the user interface for clients -that handles this homepage, menu, reservations, specials, events, about and acknowledgments-, and the <NavLink to="/admin/panel">admin panel</NavLink> (you can log in with: admin, admin) -that handles all the reservations management a restaurant's worker should do every day.</p>

                <p>As you will see, some text will be just a dummy text. As a developer, my time is extremely limited. I wanted to show the true essence of this project: the code, and how it was done. Images were taken from Unsplash and Freepik, as I detail in the Acknowledgments page. Please take the time to explore this work. Hope you enjoy it.</p>
              </div>
            </div>
            <HomeGallery />
          </SectionContent>

          <SectionContent section_title="Amazing varied Cousine">
            <HomeCousine />
          </SectionContent>

          <SectionContent section_title="Location">
            <HomeLocation />
          </SectionContent>

          <SectionContent section_title="Make a Reservation">
            <HomeReservation />
          </SectionContent>
        </Main>

        <Footer />
      </div>
    )
  }
}

export default Home;

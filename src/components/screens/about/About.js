import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import Footer from '../../common/Footer.js';
import Main from '../../common/Main.js';
import AboutIntro from './AboutIntro';
import AboutStaff from './AboutStaff';
import AboutContact from './AboutContact';

class About extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="About Us"
          page_hero_image="/about_hero.jpg"
        />

        <Header />

        <Main>
          <AboutIntro />
          <AboutStaff />
          <AboutContact />
        </Main>

        <Footer />
      </div>
    );
  }
}

export default About;

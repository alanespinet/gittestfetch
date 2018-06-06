import React from 'react';

import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';
import Main from '../../common/Main.js';
import SectionContent from '../../common/SectionContent.js';
import HomeGallery from './HomeGallery';
import HomeCousine from './HomeCousine';
import HomeLocation from './HomeLocation';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero
          page_title="React-ive Restaurant"
          page_hero_image="/home_hero.jpg"
        />

        <Header />

        <Main>
          <SectionContent section_title="Welcome">
            <div className="container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
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
          </SectionContent>
        </Main>
      </div>
    )
  }
}

export default Home;

import React from 'react';
import Hero from '../../common/Hero.js';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Hero
          page_title="React-ive Restaurant"
          page_hero_image="/home_hero.jpg"
        />
      </div>
    )
  }
}

export default Home;

import React from 'react';
import Hero from '../../common/Hero.js';

class About extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="About Us"
          page_hero_image="/about_hero.jpg"
        />
      </div>
    );
  }
}

export default About;

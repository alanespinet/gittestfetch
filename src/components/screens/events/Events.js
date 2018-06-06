import React from 'react';
import Hero from '../../common/Hero.js';
import Header from '../../common/Header.js';

class Events extends React.Component {
  render(){
    return (
      <div>
        <Hero
          page_title="Events"
          page_hero_image="/events_hero.jpg"
        />

        <Header />
      </div>
    );
  }
}

export default Events;

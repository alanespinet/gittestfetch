import React from 'react';
import EventCard from './EventCard';

class EventCardsBlock extends React.Component {

  render(){
    return (
      <div className="events-block p-tb-80">
        <div className="container">
          <div className="events-block-wrapper">

              <EventCard
                event_card_type='left'
                event_card_title='Weddings'
                event_card_image='events01.jpg'
                event_card_color='#e8cce9'
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              </EventCard>


              <EventCard
                event_card_type='right'
                event_card_title='Private Parties'
                event_card_image='events02.jpg'
                event_card_color='#c6d6ba'
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              </EventCard>


              <EventCard
                event_card_type='left'
                event_card_title='Corporate'
                event_card_image='events03.jpg'
                event_card_color='#cbd7dd'
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              </EventCard>


              <EventCard
                event_card_type='right'
                event_card_title='Birthdays'
                event_card_image='events04.jpg'
                event_card_color='#e6d3bc'
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
              </EventCard>

          </div>
        </div>
      </div>
    )
  }

}

export default EventCardsBlock;

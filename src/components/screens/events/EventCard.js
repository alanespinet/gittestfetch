import React from 'react';

// prop: event_card_type - 'left' or 'right': the position of title and image
// prop: event_card_title - string: the title shown up
// prop: event_card_image - string: image to show
// prop: event_card_color - color (as string): the color for the text background

export default (props) => (
  <div className={`event-card ${props.event_card_type}-card-type`}>
    <h2>{ props.event_card_title }</h2>
    <div className="event-card-container">
      <img src={`/images/${props.event_card_image}`} alt="" />
      <div className="event-card-text" style={{ backgroundColor: props.event_card_color }}>
        <div>
          { props.children }
        </div>
      </div>
    </div>
  </div>
);

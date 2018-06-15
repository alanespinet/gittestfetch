import React from 'react';

// prop: specials_card_image
// prop: specials_card_color
// prop: specials_card_title

export default (props) => (
  <div className="specials-card">
    <div className="specials-card__image" style={{ backgroundImage: `url(/images/${props.specials_card_image})` }}></div>

    <div className="specials-card-content">
      { props.children }
    </div>

    <div className="specials-card__title" style={{ backgroundColor: props.specials_card_color }}>
      <h3>{ props.specials_card_title }</h3>
    </div>
  </div>
);

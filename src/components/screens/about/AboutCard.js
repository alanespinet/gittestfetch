import React from 'react';


const AboutCard = ( props ) => (
  <div className="about-card">
    <img src={`/images/${props.picture}`} alt={props.name} />
    <p>{ props.name }</p>
  </div>
)

export default AboutCard;

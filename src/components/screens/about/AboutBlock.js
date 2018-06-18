import React from 'react';
import AboutCard from './AboutCard';

// prop: color - string
// prop: title - string
// prop: staff - array of objects to map into <AboutCard>

const AboutBlock = ( props ) => (
  <div className="about-block" style={{ backgroundColor: props.color }}>
    <h3>{ props.title }</h3>
    <div className="about-staff">
      { props.staff.map( member =>
        <AboutCard
          key={ member.name }
          name={ member.name }
          picture={ member.picture }
        />
      )}
    </div>
  </div>
);

export default AboutBlock;

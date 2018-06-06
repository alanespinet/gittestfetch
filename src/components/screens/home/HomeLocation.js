import React from 'react';

export default () => (
  <div className="home-location">
    <div className="home-location__image" style={{ backgroundImage: "url(/images/location.jpg)" }}>
      <div className="home-location__content">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <h3>The place where you will find yourself</h3>
        <p>We are waiting for you at:  <span className="blue">9878 SE Tremor Street, FL, 39567</span></p>
      </div>
    </div>
  </div>
);

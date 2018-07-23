import React from 'react';

const ArtSingle = props => (
  <div className="art-single">
    <img src={`/images/art/${props.image}`} className="fluid-image" />
    <div className="art-single-content">
      <p>{props.text}</p>
      <p><a href={props.url} target="_blank">See the image</a></p>
    </div>
  </div>
);

export default ArtSingle;

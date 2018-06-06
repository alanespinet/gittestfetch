import React from 'react';

export default (props) => (
  <div className="main clearfix">
    <img className="bg_top bg_image" src="/images/bg_top.png" />
      { props.children }
    <img className="bg_bottom bg_image" src="/images/bg_bottom.png" />
  </div>
);

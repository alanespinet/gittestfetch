import React from 'react';

export default class HomeGallery extends React.Component {

  render(){
    return (
      <div className="home-gallery">
        <div className="container">
          <div className="first-row">
            <div className="frfi row-image" style={{ backgroundImage: "url(/images/home_gallery01.jpg)" }}></div>
            <div className="frsi row-image" style={{ backgroundImage: "url(/images/home_gallery02.jpg)" }}></div>
          </div>

          <div className="first-row">
            <div className="frsi row-image" style={{ backgroundImage: "url(/images/home_gallery03.jpg)" }}></div>
            <div className="frfi row-image" style={{ backgroundImage: "url(/images/home_gallery04.jpg)" }}></div>
          </div>
        </div>
      </div>
    )
  }
}

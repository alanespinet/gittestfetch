import React from 'react';
import ArtList from './ArtList';

export default () => (
  <div className="acknowledgments-content p-tb-80">
    <div className="container">
      <h2>An Acknowledgment Note</h2>
      <p>Even when this projects is nothing more than a case of study, it would have not been possible without the help of those incredibly talented photographers and artists who share their photos and images in websites like <a href="https://unsplash.com/" target="_blank">unsplash.com</a> and <a href="https://www.freepik.com/">freepik.com</a>. A huge part of this project is because those shared resources. I would like, then, to thank all of them for such an amazing art.</p>

      <div className="art-wrapper">
        <ArtList />
      </div>
    </div>
  </div>
);

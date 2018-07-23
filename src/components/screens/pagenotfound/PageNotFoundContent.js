import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundContent = () => (
  <div className="page-not-found-content p-tb-80">
    <div className="container">
      <h2>We're so sorry!</h2>

      <div className="page-not-found-content-wrapper">
        <div className="page-not-found-left">
          <p>It seems that the page you are looking for does not exist or is not longer available. If you like, you can explore one of the following suggestions:</p>
          <ul className="page-not-found-suggestions">
            <li>Return to our <NavLink to="/">Homepage</NavLink></li>
            <li>Dive into our specialized <NavLink to="/menu">Menus</NavLink></li>
            <li>Take a look at are our <NavLink to="/">Specials</NavLink></li>
          </ul>
          <p className="thank-you-text">Thank you very much for your patience. Remember, you are valuable to us.</p>
        </div>

        <div className="page-not-found-right">
          <img className="fluid-image" src="/images/page-not-found-content.jpg" alt="empty table"/>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFoundContent;

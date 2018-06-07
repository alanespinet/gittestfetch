import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {

  render(){
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-divided-content-wrapper">
            <div className="right-side">
              <p>Follow us in our social media:</p>
              <div className="fallow-sm">
                <a href="fakefacebook.com"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="faketwitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                <a href="fakeyoutube.com"><i className="fa fa-youtube-square" aria-hidden="true"></i></a>
                <a href="fakevimeo.com"><i className="fa fa-vimeo-square" aria-hidden="true"></i></a>
                <a href="fakelinkedin.com"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              </div>

              <p>Subscribe to our Newsletter (email):</p>
              <div className="subscribe-form">
                <form>
                  <div className="subscribe-input-button">
                    <input type="email" name="subscribe-email" />
                    <button id="submit-subscribe">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="left-side">
              <p><NavLink className="acknokwledments-link" to="/acknokwledments">acknokwledments</NavLink></p>
            </div>
          </div>
          <div className="footer-colophon">
            <p>Created by Alan Espinet - <a href="http://alanespinet.com/" target="_blank">alanespinet.com</a></p>
          </div>
        </div>
      </div>
    );
  }

};

export default Footer;

import React from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import ReservationSuccess from './ReservationSuccess';
import ReservationFailed from './ReservationFailed';

class Footer extends React.Component {

  state = {
    email: '',
    successShow: false,
    failedShow: false
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState( () => ({ email }) );
  }

  handleSubmitSubscribe = (e) => {
    e.preventDefault();
    axios.post( 'http://localhost:3090/subscribe', { email: this.state.email } )
      .then( response => {
        if( response.data !== 'error' ){
          return this.setState( () => ({ successShow: true, email: '' }) )
        } else {
          return this.setState( () => ({ failedShow: true }) )
        }
      })
      .catch( () => { console.log('hey'); this.setState( () => ({ failedShow: true }) ) })
  }

  handleCloseSuccessModal = () => {
    this.setState( () => ({
      successShow: false
    }) );
  }

  handleCloseFailedModal = () => {
    this.setState( () => ({
      failedShow: false
    }) );
  }

  render(){
    return (
      <div className="footer">

        <ReservationSuccess
          show={this.state.successShow}
          closeModal={this.handleCloseSuccessModal}
        >
          <h3>Your Subscription was completed Successfully</h3>
        </ReservationSuccess>

        <ReservationFailed
          show={this.state.failedShow}
          closeModal={this.handleCloseFailedModal}
        >
          <h3>Ops! Something went wrong with your subscription.</h3>
          <p>Did you forget to write your email? Remember also that you can only subscribe once.</p>
        </ReservationFailed>

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
                <form action="" method="post">
                  <div className="subscribe-input-button">
                    <input type="email" name="subscriber-email"
                      value={this.state.email} onChange={this.handleEmailChange}
                    />
                    <button id="submit-subscribe" onClick={this.handleSubmitSubscribe}>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="left-side">
              <p><NavLink className="acknokwledments-link" to="/acknowledgments">acknowledgments</NavLink></p>
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

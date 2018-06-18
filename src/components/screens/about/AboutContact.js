import React from 'react';

const AboutContact = () => (
  <div className="about-contact">
    <div className="container">
      <h2>Contact and Social</h2>
      <div className="about-contact-wrapper">
        <div className="about-contact-social">
          <h3>You can reach us at our phone, address, mail or even by our social medias:</h3>
          <div className="about-contact-block">
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> 9878 SE Tremor Street, FL, 39567</p>
            <p><i className="fa fa-phone" aria-hidden="true"></i> +1 (306) - 304 5985</p>
            <p><i className="fa fa-envelope" aria-hidden="true"></i> reactiverest@restcouncil.com</p>
          </div>
        </div>

        <div className="about-social-block">
          <div className="fallow-sm">
            <a href="fakefacebook.com"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="faketwitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="fakeyoutube.com"><i className="fa fa-youtube-square" aria-hidden="true"></i></a>
            <a href="fakevimeo.com"><i className="fa fa-vimeo-square" aria-hidden="true"></i></a>
            <a href="fakelinkedin.com"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutContact;

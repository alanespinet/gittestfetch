import React from 'react';
import AcknowledgmentsHero from './acknowledgments-hero';

import Header from '../../common/Header';
import HeaderMobile from '../../common/HeaderMobile';
import Main from '../../common/Main';
import Footer from '../../common/Footer';
import AcknowledgmentsContent from './acknowledgments-content';


class Acknowledgments extends React.Component {

  render(){
    return (
      <div className="acknowledgments">
        <AcknowledgmentsHero />

        <Header />
        <HeaderMobile />

        <Main>
          <div className="acknowledgments-overlay"></div>
          <AcknowledgmentsContent />
        </Main>

        <Footer />
      </div>
    );
  }
}

export default Acknowledgments;

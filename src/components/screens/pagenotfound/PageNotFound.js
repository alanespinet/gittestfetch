import React from 'react';

import Hero from '../../common/Hero';
import Header from '../../common/Header';
import HeaderMobile from '../../common/HeaderMobile';
import SmallMain from '../../common/SmallMain';
import Footer from '../../common/Footer';
import PageNotFoundContent from './PageNotFoundContent';


class PageNotFound extends React.Component {
  render(){
    return (
      <div className="page-not-found">
        <Hero
          page_title="404 - Page Not Found"
          page_hero_image="/page_not_found_hero.jpg"
          page_hero_image_mobile="/page_not_found_hero_mobile.jpg"
        />

        <Header />
        <HeaderMobile />

        <SmallMain>
          <PageNotFoundContent />
        </SmallMain>

        <Footer />
      </div>
    );
  }
}

export default PageNotFound;

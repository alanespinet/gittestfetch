import React from 'react';
import { NavLink } from 'react-router-dom';


class HeaderMobile extends React.Component {

  onOpenMenu = (e) => {
    e.preventDefault();
    document.getElementById('header-mobile-menu').classList.add('open-menu');
  }

  onCloseMenu = (e) => {
    e.preventDefault();
    document.getElementById('header-mobile-menu').classList.remove('open-menu');
  }

  render(){
    return (
      <div className="header-mobile">
        <a className="menu-toggler" href="#" onClick={ this.onOpenMenu }>
          <div className="toggle-bars-wrapper">
            <div className="toggler-bar first-bar"></div>
            <div className="toggler-bar second-bar"></div>
            <div className="toggler-bar third-bar"></div>
          </div>
        </a>

        <div id="header-mobile-menu">
          <nav>
            <NavLink className="header__link header__home-link" to="/">Home</NavLink>
            <NavLink className="header__link" to="/menu">Menu</NavLink>
            <NavLink className="header__link" to="/reservations">Reservations</NavLink>
            <NavLink className="header__link" to="/specials">Specials</NavLink>
            <NavLink className="header__link" to="/events">Events</NavLink>
            <NavLink className="header__link" to="/about">About</NavLink>
          </nav>

          <a className="header-mobile-close" href="#" onClick={ this.onCloseMenu }>
            <div className="closer-bar first-closer-bar"></div>
            <div className="closer-bar second-closer-bar"></div>
          </a>
        </div>
      </div>
    );
  }

}



export default HeaderMobile;

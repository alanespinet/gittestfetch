import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <div className="container">
      <nav>
        <NavLink className="header__link header__home-link" to="/">Home</NavLink>
        <NavLink className="header__link" to="/menu">Menu</NavLink>
        <NavLink className="header__link" to="/reservations">Reservations</NavLink>
        <NavLink className="header__link" to="/specials">Specials</NavLink>
        <NavLink className="header__link" to="/events">Events</NavLink>
        <NavLink className="header__link" to="/about">About</NavLink>
      </nav>
    </div>
  </header>
);

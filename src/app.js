import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import store from './redux/store/store';
import App, { history } from './components/App';

import About from './components/screens/about/About.js';
import Events from './components/screens/events/Events.js';
import Menu from './components/screens/menu/Menu.js';
import Reservations from './components/screens/reservations/Reservations.js';
import Specials from './components/screens/specials/Specials.js';
import PageNotFound from './components/screens/pagenotfound/PageNotFound.js';
import Admin from './components/screens/admin/Admin';

import './styles/styles.scss';

import { getReservations } from './redux/actions';
store.dispatch( getReservations() );

// console.log( store.getState() );
// const subs = store.subscribe( () => { console.log(store.getState()) } );

const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/specials" component={Specials} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );

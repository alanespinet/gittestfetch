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

import './styles/styles.scss';

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
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );

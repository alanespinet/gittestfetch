import React from 'react';
import createHistory from 'history/createBrowserHistory';

import Home from './screens/home/Home.js';

export const history = createHistory();

export default class App extends React.Component {
  render(){
    return(
      <Home />
    )
  }
}

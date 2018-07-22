import React from 'react';
import ReservationList from './ReservationList';

import { Route } from 'react-router-dom';
import SingleReservation from './SingleReservation';

class Panel extends React.Component {

  render(){
    return (
      <div className="login">
        <div className="container">
          { this.props.location.pathname === '/admin/panel' ?
            <ReservationList /> :
            <div>
              <Route path="/admin/panel/reservation" component={SingleReservation} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Panel;

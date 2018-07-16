import React from 'react';
import ReservationList from './ReservationList';

class Panel extends React.Component {

  render(){
    return (
      <div className="login">
        <div className="container">
          <ReservationList />
        </div>
      </div>
    )
  }
}

export default Panel;

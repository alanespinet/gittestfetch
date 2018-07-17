import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';
import ReservationInList from './ReservationInList';
import ReservationListHeaders from './ReservationListHeaders';

class ReservationList extends React.Component {

  render(){
    return (
      <div className="reservation-list p-tb-80">
        <h2>Reservations</h2>
        <ReservationListHeaders />

        {this.props.reservations.map( r => {
          if( !r.archived ){
            return (
              <ReservationInList
                key={r._id}
                firstName={r.firstName}
                lastName={r.lastName}
                date={r.date}
                hour={r.hour}
                numberOfGuests={r.numberOfGuests}
              />
            );
          }
          return null;
        }


        )}
      </div>
    );
  }

}


const mapStateToProps = state => ({
  reservations: state.reservationsReducer.reservations
})

export default connect(mapStateToProps)(ReservationList);

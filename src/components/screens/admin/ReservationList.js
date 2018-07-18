import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';
import ReservationInList from './ReservationInList';
import ReservationListHeaders from './ReservationListHeaders';
import getReservations from '../../../redux/selectors/reservations'
import ReservationFilters from './ReservationsFilters';

class ReservationList extends React.Component {
  state = {
    archived: false
  }

  render(){
    return (
      <div className="reservation-list p-tb-80">
        <h2>Reservations</h2>

        <ReservationFilters />
        <ReservationListHeaders />

        {this.props.reservations.map( r =>
          <ReservationInList
            key={r._id}
            id={r._id}
            firstName={r.firstName}
            lastName={r.lastName}
            date={r.date}
            hour={r.hour}
            numberOfGuests={r.numberOfGuests}
            archived={r.archived}
          /> )
        }
      </div>
    );
  }

}


const mapStateToProps = state => ({
  reservations: getReservations(state.reservationsReducer.reservations, { archived: state.filtersReducer.archived })
})

export default connect(mapStateToProps)(ReservationList);

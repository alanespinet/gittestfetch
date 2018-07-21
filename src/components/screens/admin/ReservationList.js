import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
        { this.props.reservations.length > 0 ?
          this.props.reservations.map( r =>
          <ReservationInList
            key={r._id}
            id={r._id}
            firstName={r.firstName}
            lastName={r.lastName}
            date={moment(r.date).format("MM/DD/YYYY")}
            hour={moment(r.hour).format("HH:mm")}
            numberOfGuests={r.numberOfGuests}
            archived={r.archived}
          /> ) :
          <p className="no-reservations-found">No reservations found with the provided filter criteria</p>
        }
      </div>
    );
  }

}


const mapStateToProps = state => ({
  reservations: getReservations(state.reservationsReducer.reservations,
    {
      archived: state.filtersReducer.archived,
      vip: state.filtersReducer.vip,
      privateTable: state.filtersReducer.privateTable,
      firstName: state.filtersReducer.firstName,
      lastName: state.filtersReducer.lastName,
      fromDate: state.filtersReducer.fromDate,
      toDate: state.filtersReducer.toDate,
      enableFromSearch: state.filtersReducer.enableFrom,
      enableToSearch: state.filtersReducer.enableTo
    })
})

export default connect(mapStateToProps)(ReservationList);

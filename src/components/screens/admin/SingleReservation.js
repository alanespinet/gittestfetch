import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import moment from 'moment';

class SingleReservation extends React.Component {

  render(){
    return (
      <div className="single-reservation">

        <h2>Reservation Info for: <span className="red">{this.props.selected.firstName + ' ' + this.props.selected.lastName}</span></h2>

        <div className="single-reservation-wrapper">
          <div className="single-reservation-data">
            <p className="single-reservation-data__header">First Name</p>
            <p className="single-reservation-data__value">{ this.props.selected.firstName }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Last Name</p>
            <p className="single-reservation-data__value">{ this.props.selected.lastName }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Email</p>
            <p className="single-reservation-data__value">{ this.props.selected.email }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Phone</p>
            <p className="single-reservation-data__value">{ this.props.selected.phone }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Number of Guests</p>
            <p className="single-reservation-data__value">{ this.props.selected.numberOfGuests }</p>
          </div>

          <div className="single-reservation-data">
              <p className="single-reservation-data__header">Date</p>
              <p className="single-reservation-data__value">{ moment(this.props.selected.date).format('MM/DD/YYYY') }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Hour</p>
            <p className="single-reservation-data__value">{ moment(this.props.selected.hour).format('HH:mm') }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Private Table</p>
            <p className="single-reservation-data__value">{ this.props.selected.privateTable ? 'Yes' : 'No' }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">See the Ocean</p>
            <p className="single-reservation-data__value">{ this.props.selected.ocean ? 'Yes' : 'No' }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">Outside Table</p>
            <p className="single-reservation-data__value">{ this.props.selected.outsideTable ? 'Yes' : 'No' }</p>
          </div>

          <div className="single-reservation-data">
            <p className="single-reservation-data__header">VIP</p>
            <p className="single-reservation-data__value">{ this.props.selected.vip ? 'Yes' : 'No' }</p>
          </div>
        </div>

        <NavLink className="go-back-single-button" to="/admin/panel">Go Back</NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.reservationsReducer.selectedReservation
});

export default connect(mapStateToProps)(SingleReservation);

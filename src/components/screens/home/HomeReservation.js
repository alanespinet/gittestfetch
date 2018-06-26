import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../App';

import GroupField from '../../common/GroupField.js';
import ReservationSuccess from '../../common/ReservationSuccess';
import ReservationFailed from '../../common/ReservationFailed';

import * as actions from '../../../redux/actions';

class HomeReservation extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfGuests: '',
    date: '',
    hour: '',
    archived: false,
    successShow: false,
    failedShow: false
  }

  handleFirstNameOnChange = (e) => {
    const firstName = e.target.value;
    this.setState( () => ({ firstName }) );
  }

  handleLastNameOnChange = (e) => {
    const lastName = e.target.value;
    this.setState( () => ({ lastName }) );
  }

  handleEmailOnChange = (e) => {
    const email = e.target.value;
    this.setState( () => ({ email }) );
  }

  handlePhoneOnChange = (e) => {
    const phone = e.target.value;
    this.setState( () => ({ phone }) );
  }

  handleNumberOfGuestsOnChange = (e) => {
    const numberOfGuests = e.target.value;
    this.setState( () => ({ numberOfGuests }) );
  }

  handleDateOnChange = (e) => {
    const date = e.target.value;
    this.setState( () => ({ date }) );
  }

  handleHourOnChange = (e) => {
    const hour = e.target.value;
    this.setState( () => ({ hour }) );
  }

  clearState = () => {
    this.setState( () => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      numberOfGuests: '',
      date: '',
      hour: '',
      archived: false,
      successShow: false,
      failedShow: false
    }) );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.startAddReservation( this.state )
      .then( response => {
        if( response !== 'error' ){
          this.clearState();
          this.setState( () => ({ successShow: true }) );
        } else {
          this.setState( () => ({ failedShow: true }) );
        }
      })
      .catch( res => console.log(res) );
  }

  handleCloseSuccessModal = () => {
    this.setState( () => ({
      successShow: false
    }) );
  }

  handleCloseFailedModal = () => {
    this.setState( () => ({
      failedShow: false
    }) );
  }

  render(){
    return (
      <div className="home-reservation">

        <ReservationSuccess
          show={this.state.successShow}
          closeModal={this.handleCloseSuccessModal}
        >
          <h3>Your Reservation was completed Successfully</h3>
        </ReservationSuccess>

        <ReservationFailed
          show={this.state.failedShow}
          closeModal={this.handleCloseFailedModal}
        >
          <h3>Ops! Something went wrong with your reservation.</h3>
          <p>Please pay attention to required data (*) and data formats (dates and hours) while filling the form.</p>
        </ReservationFailed>

        <div className="container">
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>

          <div className="home-reservation__form">
            <form method="POST" action="">
              <div className="reservation-form__fields">

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="text" field_id="reservation-first-name"
                    field_name="reservation-first-name" field_label="First Name *" field_required={true}
                    field_value={this.state.firstName} onChange={this.handleFirstNameOnChange}
                  />

                  <GroupField group_type="half" field_type="text" field_id="reservation-last-name"
                    field_name="reservation-last-name" field_label="Last Name *" field_required={true}
                    field_value={this.state.lastName} onChange={this.handleLastNameOnChange}
                  />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="email" field_id="reservation-email"
                    field_name="reservation-email" field_label="Email *" field_required={true}
                    field_value={this.state.email} onChange={this.handleEmailOnChange}
                  />

                  <GroupField group_type="half" field_type="phone" field_id="reservation-phone"
                    field_name="reservation-phone" field_label="Phone *" field_required={true}
                    field_value={this.state.phone} onChange={this.handlePhoneOnChange}
                  />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="number" field_id="reservation-guests"
                    field_name="reservation-guests" field_label="Number of Guests *" field_required={true}
                    field_value={this.state.numberOfGuests} onChange={this.handleNumberOfGuestsOnChange}
                  />

                  <div className="group-field-half-subrow">
                    <GroupField group_type="half" field_type="text" field_id="reservation-date"
                      field_name="reservation-date" field_label="Date * (MM/DD/YYYY)" field_required={true}
                      field_value={this.state.date} onChange={this.handleDateOnChange}
                    />

                    <GroupField group_type="half" field_type="text" field_id="reservation-hour"
                      field_name="reservation-hour" field_label="Hour * (HH:MM)" field_required={true}
                      field_value={this.state.hour} onChange={this.handleHourOnChange}
                    />
                  </div>
                </div>

                <div className="submit-wrapper">
                  <button id="reservations-submit" onClick={this.handleSubmit}>Reserve</button>
                </div>

              </div>{ /* /.reservation-form__fields */ }
            </form>
          </div>{ /* /.home-reservation__form */ }
        </div>
      </div>
    );
  }
}


export default connect(undefined, actions)(HomeReservation);

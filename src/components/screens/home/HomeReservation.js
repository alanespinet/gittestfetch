import React from 'react';
import GroupField from '../../common/GroupField.js';

class HomeReservation extends React.Component {

  state = {  }

  render(){
    return (
      <div className="home-reservation">
        <div className="container">
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>

          <div className="home-reservation__form">
            <form>
              <div className="reservation-form__fields">

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="text" field_id="reservation-first-name"
                    field_name="reservation-first-name" field_label="First Name *" field_required={true} />

                  <GroupField group_type="half" field_type="text" field_id="reservation-last-name"
                    field_name="reservation-last-name" field_label="Last Name *" field_required={true} />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="email" field_id="reservation-email"
                    field_name="reservation-email" field_label="Email *" field_required={true} />

                  <GroupField group_type="half" field_type="phone" field_id="reservation-phone"
                    field_name="reservation-phone" field_label="Phone *" field_required={true} />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="number" field_id="reservation-guests"
                    field_name="reservation-guests" field_label="Number of Guests *" field_required={true} />

                  <div className="group-field-half-subrow">
                    <GroupField group_type="half" field_type="text" field_id="reservation-date"
                      field_name="reservation-date" field_label="Date * (MM/DD/YYYY)" field_required={true} />

                    <GroupField group_type="half" field_type="text" field_id="reservation-hour"
                      field_name="reservation-hour" field_label="Hour * (HH:MM)" field_required={true} />
                  </div>
                </div>

                <div className="submit-wrapper">
                  <button id="reservations-submit">Reserve</button>
                </div>

              </div>{ /* /.reservation-form__fields */ }
            </form>
          </div>{ /* /.home-reservation__form */ }
        </div>
      </div>
    );
  }
}

export default HomeReservation;

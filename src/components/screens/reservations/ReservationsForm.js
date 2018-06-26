import React from 'react';
import GroupField from '../../common/GroupField.js';
import GroupFieldSelect from '../../common/GroupFieldSelect.js';
import GroupFieldOptions from '../../common/GroupFieldOptions.js';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import ReservationSuccess from '../../common/ReservationSuccess';
import ReservationFailed from '../../common/ReservationFailed';

class ReservationsForm extends React.Component {

  state = {
    table_types : [
      { value: 'square', label: 'Square' },
      { value: 'round', label: 'Round' }
    ],

    private_table: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No', checked: 'checked' }
    ],

    see_ocean: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No', checked: 'checked' }
    ],

    inside_table: [
      { value: 'inside', label: 'Inside', checked: 'checked' },
      { value: 'outside', label: 'Outside' }
    ],

    waiting_time: [
      { value: 'open', label: 'Open' },
      { value: 'none', label: 'None' }
    ],

    preferred_food: [
      { value: 'no_preference', label: 'No Preference' },
      { value: 'seafood', label: 'Seafood' },
      { value: 'ribs', label: 'Ribs' },
      { value: 'salad', label: 'Salad' },
      { value: 'cuban', label: 'Cuban' },
      { value: 'italian', label: 'Italian' },
      { value: 'other', label: 'Other' }
    ],

    attended : [
      { value: 'no_preference', label: 'No Preference' },
      { value: 'heather', label: 'Heather' },
      { value: 'amanda', label: 'Amanda' },
      { value: 'francis', label: 'Francis' },
      { value: 'carl', label: 'Carl' },
      { value: 'david', label: 'David' }
    ],

    vip : [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No', checked: 'checked' }
    ],

    form_data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      numberOfGuests: '',
      date: '',
      hour: '',
      tableType: '',
      privateTable: false,
      ocean: false,
      outsideTable: false,
      waitingTime: '',
      favoriteFood: '',
      attendant: '',
      vip: false,
      archived: false
    },

    successShow: false,
    failedShow: false
  }


  handleFirstNameOnChange = (e) => {
    const firstName = e.target.value;
    const form_data = {
      ...this.state.form_data,
      firstName
    }
    this.setState( () => ({ form_data }) )
  }

  handleLastNameOnChange = (e) => {
    const lastName = e.target.value;
    const form_data = {
      ...this.state.form_data,
      lastName
    }
    this.setState( () => ({ form_data }) )
  }

  handleEmailOnChange = (e) => {
    const email = e.target.value;
    const form_data = {
      ...this.state.form_data,
      email
    }
    this.setState( () => ({ form_data }) )
  }

  handlePhoneOnChange = (e) => {
    const phone = e.target.value;
    const form_data = {
      ...this.state.form_data,
      phone
    }
    this.setState( () => ({ form_data }) )
  }

  handleNumberOfGuestsOnChange = (e) => {
    const numberOfGuests = e.target.value;
    const form_data = {
      ...this.state.form_data,
      numberOfGuests
    }
    this.setState( () => ({ form_data }) )
  }

  handleDateOnChange = (e) => {
    const date = e.target.value;
    const form_data = {
      ...this.state.form_data,
      date
    }
    this.setState( () => ({ form_data }) )
  }

  handleHourOnChange = (e) => {
    const hour = e.target.value;
    const form_data = {
      ...this.state.form_data,
      hour
    }
    this.setState( () => ({ form_data }) )
  }

  handleTableTypeOnChange = (e) => {
    let tableType = e.target.value;
    const form_data = {
      ...this.state.form_data,
      tableType
    }
    this.setState( () => ({ form_data }) )
  }

  handleWaitingTimeOnChange = (e) => {
    let waitingTime = e.target.value;
    const form_data = {
      ...this.state.form_data,
      waitingTime
    }
    this.setState( () => ({ form_data }) )
  }

  handleFavoriteFoodOnChange = (e) => {
    let favoriteFood = e.target.value;
    const form_data = {
      ...this.state.form_data,
      favoriteFood
    }
    this.setState( () => ({ form_data }) )
  }

  handleAttendantOnChange = (e) => {
    let attendant = e.target.value;
    const form_data = {
      ...this.state.form_data,
      attendant
    }
    this.setState( () => ({ form_data }) )
  }

  handlePrivateTableClick = (e) => {
    const privateTable = e.target.value;
    const form_data = {
      ...this.state.form_data,
      privateTable
    }
    const private_table_basic = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];

    const private_table = private_table_basic.map( value => {
      if( value.value === privateTable ){
        return {
          ...value,
          checked: 'checked'
        }
      }
      return { ...value }
    });

    this.setState( () => ({ form_data, private_table }) );
  }

  handleOceanClick = (e) => {
    const ocean = e.target.value;
    const form_data = {
      ...this.state.form_data,
      ocean
    }
    const ocean_basic = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];

    const see_ocean = ocean_basic.map( value => {
      if( value.value === ocean ){
        return {
          ...value,
          checked: 'checked'
        }
      }
      return { ...value }
    });

    this.setState( () => ({ form_data, see_ocean }) );
  }

  handleVipClick = (e) => {
    const vipValue = e.target.value;
    const form_data = {
      ...this.state.form_data,
      vip: vipValue
    }
    const vip_basic = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];

    const vip = vip_basic.map( value => {
      if( value.value === vipValue ){
        return {
          ...value,
          checked: 'checked'
        }
      }
      return { ...value }
    });

    this.setState( () => ({ form_data, vip }) );
  }

  handleOutsideTableClick = (e) => {
    const outsideTable = e.target.value;
    const form_data = {
      ...this.state.form_data,
      outsideTable
    }
    const outside_basic = [
      { value: 'inside', label: 'Inside' },
      { value: 'outside', label: 'Outside' }
    ];

    const inside_table = outside_basic.map( value => {
      if( value.value === outsideTable ){
        return {
          ...value,
          checked: 'checked'
        }
      }
      return { ...value }
    });

    this.setState( () => ({ form_data, inside_table }) );
  }

  clearState = () => {
    const form_data = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      numberOfGuests: '',
      date: '',
      hour: '',
      archived: false,
      tableType: '',
      privateTable: false,
      ocean: false,
      outsideTable: false,
      waitingTime: '',
      favoriteFood: '',
      attendant: '',
      vip: false
    };

    this.setState( () => ({
      form_data,
      successShow: false,
      failedShow: false
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.startAddReservation( this.state.form_data )
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
      <div className="reservations-form">

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
          <div className="reservations__reservations-form">
            <form>
              <div className="reservation-form__fields">
                <h2>Basic required information</h2>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="text" field_id="reservation-first-name"
                    field_name="reservation-first-name" field_label="First Name *" field_required={true}
                    field_value={this.state.form_data.firstName} onChange={this.handleFirstNameOnChange}
                  />

                  <GroupField group_type="half" field_type="text" field_id="reservation-last-name"
                    field_name="reservation-last-name" field_label="Last Name *" field_required={true}
                    field_value={this.state.form_data.lastName} onChange={this.handleLastNameOnChange}
                  />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="email" field_id="reservation-email"
                    field_name="reservation-email" field_label="Email *" field_required={true}
                    field_value={this.state.form_data.email} onChange={this.handleEmailOnChange}
                  />

                  <GroupField group_type="half" field_type="phone" field_id="reservation-phone"
                    field_name="reservation-phone" field_label="Phone *" field_required={true}
                    field_value={this.state.form_data.phone} onChange={this.handlePhoneOnChange}
                  />
                </div>

                <div className="group-field-row">
                  <GroupField group_type="half" field_type="number" field_id="reservation-guests"
                    field_name="reservation-guests" field_label="Number of Guests *" field_required={true}
                    field_value={this.state.form_data.numberOfGuests} onChange={this.handleNumberOfGuestsOnChange}
                  />

                  <div className="group-field-half-subrow">
                    <GroupField group_type="half" field_type="text" field_id="reservation-date"
                      field_name="reservation-date" field_label="Date * (MM/DD/YYYY)" field_required={true}
                      field_value={this.state.form_data.date} onChange={this.handleDateOnChange}
                    />

                    <GroupField group_type="half" field_type="text" field_id="reservation-hour"
                      field_name="reservation-hour" field_label="Hour * (HH:MM)" field_required={true}
                      field_value={this.state.form_data.hour} onChange={this.handleHourOnChange}
                    />
                  </div>
                </div>


                <h2>Personalize (make this your way)</h2>
                <div className="special-inputs">
                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-table-type"
                      field_name="reservation-table-type" field_label="Table Type" field_required={false}
                      field_options={this.state.table_types} field_value={this.state.form_data.tableType}
                      onChange={this.handleTableTypeOnChange}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-private-table"
                      field_name="reservation-private-table" field_label="Private Table (enclosed)"
                      field_options={this.state.private_table} onChange={this.handlePrivateTableClick}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldOptions group_type="half" field_id="reservation-see-ocean"
                      field_name="reservation-see-ocean" field_label="Want to see the ocean from your table?"
                      field_options={this.state.see_ocean} onChange={this.handleOceanClick}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-inside-table"
                      field_name="reservation-inside-table" field_label="Inside or outside table?"
                      field_options={this.state.inside_table} onChange={this.handleOutsideTableClick}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-waiting-time"
                      field_name="reservation-waiting-time" field_label="Preferred waiting time"
                      field_options={this.state.waiting_time} field_value={this.state.form_data.waitingTime}
                      onChange={this.handleWaitingTimeOnChange}
                    />

                    <GroupFieldSelect group_type="half" field_id="reservation-preferred-food"
                      field_name="reservation-preferred-food" field_label="Favorite food you’d like to eat?"
                      field_options={this.state.preferred_food} field_value={this.state.form_data.favoriteFood}
                      onChange={this.handleFavoriteFoodOnChange}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-attended"
                      field_name="reservation-attended" field_label="Attended for someone special?"
                      field_options={this.state.attended} field_value={this.state.form_data.attendant}
                      onChange={this.handleAttendantOnChange}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-vip"
                      field_name="reservation-vip" field_label="VIP?"
                      field_options={this.state.vip} onChange={this.handleVipClick}
                    />
                  </div>

                  <div className="submit-wrapper">
                    <button id="reservations-submit" onClick={this.handleSubmit}>Reserve</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <h3>Thank you for reserve with us today! We really hope you spend a great time. we promise to offer you the best treatment and the best food.</h3>
        </div>
      </div>
    );
  }

}

export default connect(undefined, actions)(ReservationsForm);

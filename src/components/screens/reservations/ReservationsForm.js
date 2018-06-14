import React from 'react';
import GroupField from '../../common/GroupField.js';
import GroupFieldSelect from '../../common/GroupFieldSelect.js';
import GroupFieldOptions from '../../common/GroupFieldOptions.js';

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
      { value: 'seafood', label: 'Seafood' },
      { value: 'ribs', label: 'Ribs' },
      { value: 'salad', label: 'Salad' },
      { value: 'cuban', label: 'Cuban' },
      { value: 'italian', label: 'Italian' },
      { value: 'other', label: 'Other' }
    ],

    attended : [
      { value: 'heather', label: 'Heather' },
      { value: 'amanda', label: 'Amanda' },
      { value: 'francis', label: 'Francis' },
      { value: 'carl', label: 'Carl' },
      { value: 'david', label: 'David' }
    ],

    vip : [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No', checked: 'checked' }
    ]
  }

  render(){
    return (
      <div className="reservations-form">
        <div className="container">
          <div className="reservations__reservations-form">
            <form>
              <div className="reservation-form__fields">
                <h2>Basic required information</h2>

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


                <h2>Personalize (make this your way)</h2>
                <div className="special-inputs">
                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-table-type"
                      field_name="reservation-table-type" field_label="Table Type" field_required={false}
                      field_options={this.state.table_types}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-private-table"
                      field_name="reservation-private-table" field_label="Private Table (enclosed)"
                      field_options={this.state.private_table}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldOptions group_type="half" field_id="reservation-see-ocean"
                      field_name="reservation-see-ocean" field_label="Want to see the ocean from your table?"
                      field_options={this.state.see_ocean}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-inside-table"
                      field_name="reservation-inside-table" field_label="Inside or outside table?"
                      field_options={this.state.inside_table}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-waiting-time"
                      field_name="reservation-waiting-time" field_label="Preferred waiting time"
                      field_options={this.state.waiting_time}
                    />

                    <GroupFieldSelect group_type="half" field_id="reservation-preferred-food"
                      field_name="reservation-preferred-food" field_label="Favorite food you’d like to eat?"
                      field_options={this.state.preferred_food}
                    />
                  </div>

                  <div className="group-field-row">
                    <GroupFieldSelect group_type="half" field_id="reservation-attended"
                      field_name="reservation-attended" field_label="Attended for someone special?"
                      field_options={this.state.attended}
                    />

                    <GroupFieldOptions group_type="half" field_id="reservation-vip"
                      field_name="reservation-vip" field_label="VIP?"
                      field_options={this.state.vip}
                    />
                  </div>

                  <div className="submit-wrapper">
                    <button id="reservations-submit">Reserve</button>
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

export default ReservationsForm;

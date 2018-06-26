import React from 'react';

// prop: group_type -> 'half' or 'full'
// prop: field_type -> 'text', 'email', 'password', etc (NO 'select', 'optiongroup', etc)
// prop: field_id -> 'text'
// prop: field_name -> 'text'
// prop: field_label -> 'text'
// prop: field_required -> true or false
// prop: field_value -> 'text'
// prop: onChange -> handler



const GroupField = (props) => (
  <div className={`group-field group-type-${props.group_type}`}>
    <label htmlFor={props.field_id}>{props.field_label}</label>
    <input
      type={props.field_type}
      id={props.field_id}
      name={props.field_name}
      required={props.field_required ? 'required' : ''}
      value={props.field_value}
      onChange={props.onChange}
    />
  </div>
);

export default GroupField;

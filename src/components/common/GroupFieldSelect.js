import React from 'react';

// prop: group_type -> 'half' or 'full'
// prop: field_id -> 'text'
// prop: field_name -> 'text'
// prop: field_label -> 'text'
// prop: field_required -> true or false
// prop: field_options -> array with select options -> each element { value, label }

export default (props) => (
  <div className={`group-field group-type-${props.group_type}`}>
    <label htmlFor={props.field_id}>{props.field_label}</label>
    <select
      id={props.field_id}
      name={props.field_name}
      required={props.field_required ? 'required' : ''}
    >
      { props.field_options.map( option =>
        <option key={option.value} value={option.value}>{option.label}</option>
      )}
    </select>
  </div>
);

import React from 'react';

// prop: group_type -> 'half' or 'full'
// prop: field_id -> 'text'
// prop: field_name -> 'text'
// prop: field_label -> 'text'
// prop: field_options -> array with select options -> each element { value, label }

export default (props) => (
  <div className={`group-field group-type-${props.group_type}`}>
    <label>{props.field_label}</label>
    <div id={props.field_id} className="radio-group-wrapper">
      { props.field_options.map( option =>
        <div key={option.value} className="radio-group">
          <input type="radio" name={props.field_name} value={option.value} checked={option.checked ? option.checked : ''}/>
          <label className="inner-label">{option.label }</label>
        </div>
      )}
    </div>
  </div>
);

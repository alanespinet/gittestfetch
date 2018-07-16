import React from 'react';

const ReservationInList = props => (
  <div className="reservation-in-list">
    <div className="reservation-in-list-wrapper">
      <div className="reservation-data">
        <p className="fn">{props.firstName}</p>
        <p className="ln">{props.lastName}</p>
        <p className="dt">{props.date}</p>
        <p className="hr">{props.hour}</p>
        <p className="gs">{props.numberOfGuests}</p>
      </div>

      <div className="reservation-actions">
        <button className="reservation-actions-button button-view">View</button>
        <button className="reservation-actions-button button-archive">Archive</button>
        <button className="reservation-actions-button button-cancel">Cancel</button>
      </div>
    </div>
  </div>
);

export default ReservationInList;

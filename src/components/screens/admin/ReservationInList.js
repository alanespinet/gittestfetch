import React from 'react';

const ReservationInList = props => (
  <div className="reservation-in-list">
    <div className="reservation-in-list-wrapper">
      <div className="reservation-data">
        <div className="reservation-data__wrapper fn">
          <span className="reservation-data__column-name">First Name: </span><p>{props.firstName}</p>
        </div>

        <div className="reservation-data__wrapper ln">
          <span className="reservation-data__column-name">last Name: </span><p>{props.lastName}</p>
        </div>

        <div className="reservation-data__wrapper dt">
          <span className="reservation-data__column-name">Date: </span><p>{props.date}</p>
        </div>

        <div className="reservation-data__wrapper hr">
          <span className="reservation-data__column-name">Hour: </span><p>{props.hour}</p>
        </div>

        <div className="reservation-data__wrapper gs">
          <span className="reservation-data__column-name">Guests: </span><p>{props.numberOfGuests}</p>
        </div>
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

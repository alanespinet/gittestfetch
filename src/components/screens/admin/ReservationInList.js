import React from 'react';
import { connect } from 'react-redux';

import {
  startArchiveReservation,
  startCancelReservation,
  startUnarchiveReservation
} from '../../../redux/actions';


class ReservationInList extends React.Component {

  handleArchiveReservation = () => {
    const id = this.props.id;
    this.props.archiveReservation(id);
  }

  handleUnarchiveReservation = () => {
    const id = this.props.id;
    this.props.unarchiveReservation(id);
  }

  handleCancelReservation = () => {
    const id = this.props.id;
    this.props.cancelReservation(id);
  }

  render(){
    return (
      <div className="reservation-in-list">
        <div className="reservation-in-list-wrapper">
          <div className="reservation-data">
            <div className="reservation-data__wrapper fn">
              <span className="reservation-data__column-name">First Name: </span><p>{this.props.firstName}</p>
            </div>

            <div className="reservation-data__wrapper ln">
              <span className="reservation-data__column-name">last Name: </span><p>{this.props.lastName}</p>
            </div>

            <div className="reservation-data__wrapper dt">
              <span className="reservation-data__column-name">Date: </span><p>{this.props.date}</p>
            </div>

            <div className="reservation-data__wrapper hr">
              <span className="reservation-data__column-name">Hour: </span><p>{this.props.hour}</p>
            </div>

            <div className="reservation-data__wrapper gs">
              <span className="reservation-data__column-name">Guests: </span><p>{this.props.numberOfGuests}</p>
            </div>
          </div>

          <div className="reservation-actions">
            <button className="reservation-actions-button button-view">View</button>

            { this.props.archived ?
              ( <button className="reservation-actions-button button-archive" onClick={this.handleUnarchiveReservation}>Unarchive</button> )
              : ( <button className="reservation-actions-button button-archive" onClick={this.handleArchiveReservation}>Archive</button> )
            }


            <button className="reservation-actions-button button-cancel" onClick={this.handleCancelReservation}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => ({
  archiveReservation: id => dispatch( startArchiveReservation(id) ),
  unarchiveReservation: id => dispatch( startUnarchiveReservation(id) ),
  cancelReservation: id => dispatch( startCancelReservation(id) )
});

export default connect(undefined, mapDispatchToProps)(ReservationInList);

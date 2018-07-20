import React from 'react';
import { connect } from 'react-redux';
import * as filters from '../../../redux/actions/filters';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class ReservationFilters extends React.Component {

  handleArchivedChange = e => {
    const value = e.target.value;
    this.props.changeArchived(value);
  }

  handleVIPChange = e => {
    const value = e.target.value;
    this.props.changeVIP(value);
  }

  handlePrivateTableChange = e => {
    const value = e.target.value;
    this.props.changePrivateTable(value);
  }

  handleFirstNameChange = e => {
    const value = e.target.value;
    this.props.changeFirstName(value);
  }

  handleLastNameChange = e => {
    const value = e.target.value;
    this.props.changeLastName(value);
  }

  handleFromOnChange = (date) => {
    this.props.changeFromDate(date)
  }

  handleToOnChange = (date) => {
    this.props.changeToDate(date)
  }

  handleEnableFromOnChange = e => {
    const value = e.target.checked;
    this.props.changeEnableFrom(value);
  }

  handleEnableToOnChange = e => {
    const value = e.target.checked;
    this.props.changeEnableTo(value);
  }

  render(){
    return (
      <div className="reservations-filters">
        <div className="reservations-filters__row">
          <div className="reservation-filters__control">
            <label htmlFor="reservations-archive">Archived</label>
            <select id="reservations-archive" onChange={this.handleArchivedChange}>
              <option value="all" default>All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="reservation-filters__control">
            <label htmlFor="reservation-filters__vip">VIP</label>
            <select id="reservation-filters__vip" onChange={this.handleVIPChange}>
              <option value="all" default>All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="reservation-filters__control">
            <label htmlFor="reservation-filters__private-table">Private Table</label>
            <select id="reservation-filters__private-table" onChange={this.handlePrivateTableChange}>
              <option value="all" default>All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="reservations-filters__row">
          <div className="reservation-filters__control">
            <label htmlFor="reservation-filters__first-name">First Name</label>
            <input type="text" id="reservation-filters__first-name" onChange={this.handleFirstNameChange}/>
          </div>

          <div className="reservation-filters__control">
            <label htmlFor="reservation-filters__last-name">Last Name</label>
            <input type="text" id="reservation-filters__last-name" onChange={this.handleLastNameChange}/>
          </div>

          <div className="reservation-filters__control">
            <input type="checkbox" id="reservation-filters__enable-from" onChange={this.handleEnableFromOnChange}/>
            <label htmlFor="reservation-filters__enable-from">Enable from Date sarch</label>
          </div>

          <div className="reservation-filters__control">
            <label>From</label>
            <DatePicker
              dateFormat="MM/DD/YYYY"
              selected={this.props.fromDate}
              onChange={this.handleFromOnChange}
            />
          </div>

          <div className="reservation-filters__control">
            <input type="checkbox" id="reservation-filters__enable-to" onChange={this.handleEnableToOnChange}/>
            <label htmlFor="reservation-filters__enable-to">Enable to Date sarch</label>
          </div>

          <div className="reservation-filters__control">
            <label>To</label>
            <DatePicker
              dateFormat="MM/DD/YYYY"
              selected={this.props.toDate}
              onChange={this.handleToOnChange}
            />
          </div>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeArchived: a => dispatch(filters.changeArchived(a)),
  changeVIP: v => dispatch(filters.changeVIP(v)),
  changePrivateTable: t => dispatch(filters.changePrivateTable(t)),
  changeFirstName: fn => dispatch(filters.changeFirstName(fn)),
  changeLastName: ln => dispatch(filters.changeLastName(ln)),
  changeFromDate: fd => dispatch(filters.changeFromDate(fd)),
  changeToDate: td => dispatch(filters.changeToDate(td)),
  changeEnableFrom: f => dispatch(filters.changeEnableFrom(f)),
  changeEnableTo: t => dispatch(filters.changeEnableTo(t))
});

const mapStateToProps = state => ({
  fromDate: state.filtersReducer.fromDate,
  toDate: state.filtersReducer.toDate
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationFilters);

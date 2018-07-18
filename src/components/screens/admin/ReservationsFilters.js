import React from 'react';
import { connect } from 'react-redux';
import * as filters from '../../../redux/actions/filters';


class ReservationFilters extends React.Component {
  handleArchivedChange = e => {
    const value = e.target.value === 'archived';
    this.props.changeArchived(value);
  }

  render(){
    return (
      <div className="reservations-filters">
        <div className="control">
          <select onChange={this.handleArchivedChange}>
            <option value="non-archived" default>Non Archived</option>
            <option value="archived">Archived</option>
          </select>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeArchived: a => dispatch(filters.changeArchived(a))
});

export default connect(undefined, mapDispatchToProps)(ReservationFilters);

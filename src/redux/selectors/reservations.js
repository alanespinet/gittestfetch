import moment from 'moment';

const getReservations = ( reservations, { archived, vip, privateTable, firstName, lastName, fromDate, toDate, enableFromSearch, enableToSearch } ) => {
  // temporal data
  let selectedReservations = reservations;

  // archived filter
  if( archived !== 'all' ){
    const arch_bool = archived === 'yes';
    selectedReservations = reservations.filter( r => r.archived === arch_bool );
  }

  // vip filter
  if( vip !== 'all' ){
    const vip_bool = vip === 'yes';
    selectedReservations = selectedReservations.filter( r => r.vip === vip_bool );
  }

  // private table filter
  if( privateTable !== 'all' ){
    const pt_bool = privateTable === 'yes';
    selectedReservations = selectedReservations.filter( r => r.privateTable === pt_bool );
  }

  // first name filter
  if( firstName.trim() !== '' ){
    const lwfn = firstName.toLowerCase();
    selectedReservations = selectedReservations.filter( r => r.firstName.toLowerCase().includes(lwfn) );
  }

  // last name filter
  if( lastName.trim() !== '' ){
    const lwln = lastName.toLowerCase();
    selectedReservations = selectedReservations.filter( r => r.lastName.toLowerCase().includes(lwln) );
  }

  // from date filter
  if( enableFromSearch ){
    selectedReservations = selectedReservations.filter( r => moment(r.date).isSameOrAfter(fromDate) );
  }

  // to date filter
  if( enableToSearch ){
    selectedReservations = selectedReservations.filter( r => moment(r.date).isSameOrBefore(toDate) );
  }

  return selectedReservations;
}

export default getReservations;

import axios from 'axios';

const pushReservations = reservations => ({
  type: 'PUT_RESERVATIONS',
  payload: reservations
});

const addReservation = reservation => ({
  type: 'ADD_RESERVATION',
  payload: reservation
});

export const getReservations = () => {
  return dispatch => {
    return axios.get('http://localhost:3090/reservations')
      .then( reservations => {
        dispatch( pushReservations( reservations.data ) )
      })
      .catch( error => {
        if( error.response ){
          console.log(error.response.status);
        }
      });
  };
};

export const startAddReservation = reservation => {
  return dispatch => {
    return axios.post('http://localhost:3090/reservation', reservation)
      .then( response => {
        if( response.data === '' ){ return 'error'; }
        dispatch( addReservation( reservation ) );
      })
      .catch( error => {
        if( error.response ){
          console.log(error.response.status);
        }
      });
  }
}

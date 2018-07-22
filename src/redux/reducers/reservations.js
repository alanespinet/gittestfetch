const defaultState = {
  reservations: [],
  selectedReservation: {}
};

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'PUT_RESERVATIONS':
      return {
        ...state,
        reservations: action.payload
      }

    case 'ARCHIVE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.map( r => r._id === action.payload ? { ...r, archived: true }: r )
      }

    case 'UNARCHIVE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.map( r => r._id === action.payload ? { ...r, archived: false }: r )
      }

    case 'CANCEL_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter( r => r._id !== action.payload )
      }

    case 'SELECT_RESERVATION':
      return {
        ...state,
        selectedReservation: state.reservations.filter( r => r._id === action.payload )[0]
      }

    default:
      return state;
  }
};

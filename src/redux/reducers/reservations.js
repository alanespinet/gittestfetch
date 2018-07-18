const defaultState = {
  reservations: []
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

    default:
      return state;
  }
};

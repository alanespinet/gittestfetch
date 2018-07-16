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

    default:
      return state;
  }
};

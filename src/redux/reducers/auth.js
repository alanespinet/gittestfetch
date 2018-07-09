const defaultState = {
  authenticated: false,
  user: ''
};

// const defaultState = {
//   authenticated: true,
//   user: 'Heather'
// };

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'AUTHENTICATE':
      return {
        authenticated: true,
        user: action.payload
      }

    default:
      return state;
  }
};

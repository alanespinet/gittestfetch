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
      console.log('action dispatched');
      
      let auth_info = defaultState;
      let auth_data = JSON.parse(localStorage.getItem('auth_info'));

      if(auth_data) {
        auth_info = {
          authenticated: auth_data.authenticated,
          user: auth_data.username
        };
      }

      return auth_info;

    default:
      return state;
  }
};

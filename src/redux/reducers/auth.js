const defaultState = {
  authenticated: false,
  user: ''
};

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'AUTHENTICATE':
      let auth_info = defaultState;
      let auth_data = JSON.parse(localStorage.getItem('auth_info'));

      if(auth_data) {
        auth_info = {
          authenticated: auth_data.authenticated,
          user: auth_data.username
        };
      }
      return auth_info;

    case 'LOGOUT':
      if( localStorage.getItem('auth_info') ){
        localStorage.removeItem('auth_info');
      }
      return defaultState;

    default:
      return state;
  }
};

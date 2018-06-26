import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authenticationReducer from './auth';


export default combineReducers({
  reservationsReducer,
  authenticationReducer
});

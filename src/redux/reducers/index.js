import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authenticationReducer from './auth';
import filtersReducer from './filters';


export default combineReducers({
  reservationsReducer,
  authenticationReducer,
  filtersReducer
});

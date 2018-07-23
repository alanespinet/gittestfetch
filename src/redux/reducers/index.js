import { combineReducers } from 'redux';
import reservationsReducer from './reservations';
import authenticationReducer from './auth';
import filtersReducer from './filters';
import artReducer from './acknowledgments';


export default combineReducers({
  reservationsReducer,
  authenticationReducer,
  filtersReducer,
  artReducer
});

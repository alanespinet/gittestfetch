import moment from 'moment';

const defaultState = {
  archived: 'all',
  vip: 'all',
  privateTable: 'all',
  firstName: '',
  lastName: '',
  fromDate: moment(),
  toDate: moment(),
  enableFrom: false,
  enableTo: false
}

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'CHANGE_ARCHIVED':
      return {
        ...state,
        archived: action.payload
      }

    case 'CHANGE_VIP':
      return {
        ...state,
        vip: action.payload
      }

    case 'CHANGE_PRIVATE_TABLE':
      return {
        ...state,
        privateTable: action.payload
      }

    case 'CHANGE_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload
      }

    case 'CHANGE_LAST_NAME':
      return {
        ...state,
        lastName: action.payload
      }

    case 'CHANGE_FROM_DATE':
      return {
        ...state,
        fromDate: action.payload
      }

    case 'CHANGE_TO_DATE':
      return {
        ...state,
        toDate: action.payload
      }

    case 'CHANGE_ENABLE_FROM':
      return {
        ...state,
        enableFrom: action.payload
      }

    case 'CHANGE_ENABLE_TO':
      return {
        ...state,
        enableTo: action.payload
      }

    default:
      return state;
  }
}

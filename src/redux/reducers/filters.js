const defaultState = {
  archived: false
}

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'CHANGE_ARCHIVED':
      return {
        ...state,
        archived: action.payload
      }

    default:
      return state;
  }
}

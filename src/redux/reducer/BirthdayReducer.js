import {
    REQUEST_BIRTHDAY,
    RECEIVE_BIRTHDAY,
    FAILURE_BIRTHDAY,
  } from 'redux/ActionType'
  
  const initialState = {
    code : null,
    message : null,
    data : null,
    error : null,

  }
  export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_BIRTHDAY:
        return {
          ...state,
      
        }
      case RECEIVE_BIRTHDAY:
        return {
          ...state,
          user : action.payload.data.data.user
        }
      case FAILURE_BIRTHDAY:
        return {
          ...state,
      
          error : payload.error
        }
      default:
        return {
          ...state
        }
    }
  }
  
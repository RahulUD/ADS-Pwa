import {
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  FAILURE_ADD_USER,
  } from 'redux/ActionType'
  
  const initialState = {
    code: null,
    message: null,
    error: null,
    user : null,
    userable : null,
    address : [],
    contact : [],
    guardians : [],
    progress : 0,
  }
  export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_ADD_USER:
        return {
          ...state,
        }
      case RECEIVE_ADD_USER:
        return {
          ...state,
          user : payload.data.data.user,
          progress : 1
        }
        case FAILURE_ADD_USER:
          return {
            ...state,
            error : payload
          }
      default:
        return {
          ...state
        }
    }
  }  
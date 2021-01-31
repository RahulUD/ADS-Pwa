import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    FAILURE_LOGIN,
    RECEIVE_LOGIN_FROM_SESSION
  } from './../ActionType'
  
  const initialState = {
    code : null,
    message : null,
    user : null,
    token : null,
    isAuthSuccessful : false,
    error : null,
    loading : false,
  }
  export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case RECEIVE_LOGIN_FROM_SESSION:
        return {
          ...state,
          loading : false,
          isAuthSuccessful : true,
          user : action.payload.user,
          token : action.token
        }
      case REQUEST_LOGIN:
        return {
          ...state,
          loading : true
        }
      case RECEIVE_LOGIN:
        return {
          ...state,
          loading : false,
          isAuthSuccessful : true,
          user : action.payload.data.data.user,
          token : action.payload.data.data.token
        }
      case FAILURE_LOGIN:
        return {
          ...state,
          loading : false,
          error : payload.error
        }
      default:
        return {
          ...state
        }
    }
  }
  
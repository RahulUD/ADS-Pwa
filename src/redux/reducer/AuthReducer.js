import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT,
  FAILURE_LOGOUT,
  RECEIVE_LOGIN_FROM_SESSION
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  user: null,
  token: null,
  isAuthSuccessful: false,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_LOGIN_FROM_SESSION:
      return {
        ...state,
    
        isAuthSuccessful: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
    
      }
    case RECEIVE_LOGOUT:
      return {
        ...state,
    
        isAuthSuccessful: false,
        user: null,
        token: null
      }
    case FAILURE_LOGOUT:
      return {
        ...state,
    
        error: payload.error
      }
    case REQUEST_LOGIN:
      return {
        ...state,
    
      }
    case RECEIVE_LOGIN:
      return {
        ...state,
    
        isAuthSuccessful: true,
        user: action.payload.data.data.user.name,
        token: action.payload.data.data.token
      }
    case FAILURE_LOGIN:
      return {
        ...state,
    
        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}

import {
    REQUEST_POST_REGISTER,
    RECEIVE_POST_REGISTER,
    FAILURE_POST_REGISTER} from 'redux/ActionType'
  
  
  const initialState = {
    code: null,
    message: null,
    data: [],
    error: null,
  
  }
  const RegisterReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_POST_REGISTER:
        return {
          ...state,
  
        }
      case RECEIVE_POST_REGISTER:
        return {
          ...state,
  
          data: action.payload.data
        }
      case FAILURE_POST_REGISTER:
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
  export default RegisterReducer;
  
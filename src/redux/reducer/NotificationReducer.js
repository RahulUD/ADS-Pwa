import {
  REQUEST_GET_NOTIFICATION,
  RECEIVE_GET_NOTIFICATION,
  FAILURE_GET_NOTIFICATION,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  data:null,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_NOTIFICATION:
      return {
        ...state,
      }
    case RECEIVE_GET_NOTIFICATION:
      return {
        ...state,
        data: payload.data.data
      }
    case FAILURE_GET_NOTIFICATION:
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
import {
  REQUEST_GET_FAQ,
  RECEIVE_GET_FAQ,
  FAILURE_GET_FAQ,
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
    case REQUEST_GET_FAQ:
      return {
        ...state,
      }
    case RECEIVE_GET_FAQ:
      return {
        ...state,
        data: payload.data.data
      }
    case FAILURE_GET_FAQ:
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
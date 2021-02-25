import {
  REQUEST_GET_HOLIDAYS,
  RECEIVE_GET_HOLIDAYS,
  FAILURE_GET_HOLIDAYS,
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
    case REQUEST_GET_HOLIDAYS:
      return {
        ...state,
      }
    case RECEIVE_GET_HOLIDAYS:
      return {
        ...state,
        data: payload.data.data
      }
    case FAILURE_GET_HOLIDAYS:
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
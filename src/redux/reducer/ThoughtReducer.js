import {
  REQUEST_GET_THOUGHT,
  RECEIVE_GET_THOUGHT,
  FAILURE_GET_THOUGHT,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  thought:null,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_THOUGHT:
      return {
        ...state,
      }
    case RECEIVE_GET_THOUGHT:
      return {
        ...state,
        thought: payload.data.data
      }
    case FAILURE_GET_THOUGHT:
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
import {
  REQUEST_GET_ALUMINI,
  RECEIVE_GET_ALUMINI,
  FAILURE_GET_ALUMINI,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  aluminis:null,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_ALUMINI:
      return {
        ...state,
      }
    case RECEIVE_GET_ALUMINI:
      return {
        ...state,
        aluminis: payload.data.data
      }
    case FAILURE_GET_ALUMINI:
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
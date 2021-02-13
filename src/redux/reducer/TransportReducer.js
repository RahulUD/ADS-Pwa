import {
  REQUEST_TRANSPORT,
RECEIVE_TRANSPORT,
FAILURE_TRANSPORT,
} from "redux/ActionType";

const initialState = {
  code: null,
  message: null,
  data: null,
  error: null,
}
export default (state = initialState, action) => {

  const { type, payload } = action
  switch (type) {
    case REQUEST_TRANSPORT:
      return {
        ...state,
      }
    case RECEIVE_TRANSPORT:
      return {
        ...state,
        data: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_TRANSPORT:
      return {
        ...state,
        message: "Failed Try again",
        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}
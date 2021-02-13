import {
  REQUEST_SCHOLOR,
RECEIVE_SCHOLOR,
FAILURE_SCHOLOR,
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
    case REQUEST_SCHOLOR:
      return {
        ...state,
      }
    case RECEIVE_SCHOLOR:
      return {
        ...state,
        data: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_SCHOLOR:
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
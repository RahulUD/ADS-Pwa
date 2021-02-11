import {
  REQUEST_RELATION,
  RECEIVE_RELATION,
  FAILURE_RELATION
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
    case REQUEST_RELATION:
      return {
        ...state,
      }
    case RECEIVE_RELATION:
      return {
        ...state,
        data: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_RELATION:
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
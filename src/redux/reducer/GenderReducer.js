import {
  REQUEST_GET_GENDER,
  RECEIVE_GET_GENDER,
  FAILURE_GET_GENDER
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
    case REQUEST_GET_GENDER:
      return {
        ...state,
      }
    case RECEIVE_GET_GENDER:
      return {
        ...state,
        data: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_GET_GENDER:
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
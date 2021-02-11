import {
  REQUEST_GET_ADDRESS_TYPE,
  RECEIVE_GET_ADDRESS_TYPE,
  FAILURE_GET_ADDRESS_TYPE
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
    case REQUEST_GET_ADDRESS_TYPE:
      return {
        ...state,
      }
    case RECEIVE_GET_ADDRESS_TYPE:
      return {
        ...state,
        data: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_GET_ADDRESS_TYPE:
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
import {
  REQUEST_STATES,
  RECEIVE_STATES,
  FAILURE_STATES,
  REQUEST_DISTRICTS,
  RECEIVE_DISTRICTS,
  FAILURE_DISTRICTS,
  REQUEST_PINS,
  RECEIVE_PINS,
  FAILURE_PINS,
} from "redux/ActionType";

const initialState = {
  code: null,
  message: null,
  states: null,
  districts: null,
  pins: null,
  state: null,
  district: null,
  pin: null,
  error: null,
}
export default (state = initialState, action) => {

  const { type, payload } = action
  switch (type) {
    case REQUEST_STATES:
      return {
        ...state,
      }
    case RECEIVE_STATES:
      return {
        ...state,
        states: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_STATES:
      return {
        ...state,
        message: "Failed Try again",
        error: payload.error
      }
    case REQUEST_DISTRICTS:
      return {
        ...state,
      }
    case RECEIVE_DISTRICTS:
      return {
        ...state,
        districts: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_DISTRICTS:
      return {
        ...state,
        message: "Failed Try again",
        error: payload.error
      }
    case REQUEST_PINS:
      return {
        ...state,
      }
    case RECEIVE_PINS:
      return {
        ...state,
        pins: payload.data.data,
        message: "Submitted Successfully"
      }
    case FAILURE_PINS:
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
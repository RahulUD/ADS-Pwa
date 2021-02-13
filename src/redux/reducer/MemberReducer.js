import {
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  FAILURE_ADD_USER,
  REQUEST_ADD_STUDENT,
  RECEIVE_ADD_STUDENT,
  FAILURE_ADD_STUDENT,
  REQUEST_ADD_ADDRESS,
  RECEIVE_ADD_ADDRESS,
  FAILURE_ADD_ADDRESS,
  REQUEST_ADD_CONTACT,
  RECEIVE_ADD_CONTACT,
  FAILURE_ADD_CONTACT,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  error: null,
  user: null,
  student: null,
  addresses: [],
  contacts: [],
  guardians: [],
  progress: 0,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_ADD_ADDRESS:
      return {
        ...state,
      }
    case RECEIVE_ADD_ADDRESS:
      return {
        ...state,
        addresses: payload.data.data.address,
        progress: 1
      }
    case FAILURE_ADD_ADDRESS:
      return {
        ...state,
        error: payload
      }
    case REQUEST_ADD_CONTACT:
      return {
        ...state,
      }
    case RECEIVE_ADD_CONTACT:
      return {
        ...state,
        contacts: payload.data.data.contact,
        progress: 1
      }
    case FAILURE_ADD_CONTACT:
      return {
        ...state,
        error: payload
      }
    case REQUEST_ADD_STUDENT:
      return {
        ...state,
      }
    case RECEIVE_ADD_STUDENT:
      return {
        ...state,
        student: payload.data.data.student,
        progress: 1
      }
    case FAILURE_ADD_STUDENT:
      return {
        ...state,
        error: payload
      }
    case REQUEST_ADD_USER:
      return {
        ...state,
      }
    case RECEIVE_ADD_USER:
      return {
        ...state,
        user: payload.data.data.user,
        progress: 1
      }
    case FAILURE_ADD_USER:
      return {
        ...state,
        error: payload
      }

    default:
      return {
        ...state
      }
  }
}  
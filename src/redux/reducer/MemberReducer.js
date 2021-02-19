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
  REQUEST_PARENT,
  RECEIVE_PARENT,
  FAILURE_PARENT,
  REQUEST_ADD_DOCUMENT,
  RECEIVE_ADD_DOCUMENT,
  FAILURE_ADD_DOCUMENT,
  REQUEST_UPDATE_PROGRESS,

} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  error: null,
  user: null,
  student: null,
  documents: [],
  addresses: [],
  contacts: [],
  guardians: [],
  progress: 0,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_UPDATE_PROGRESS:
      return {
        ...state,
        progress: payload
      }
    case REQUEST_ADD_DOCUMENT:
      return {
        ...state,
      }
    case RECEIVE_ADD_DOCUMENT:
      return {
        ...state,
        documents: payload.data.data,

      }
    case FAILURE_ADD_DOCUMENT:
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
        documents: payload.data.data.document,

      }
    case FAILURE_ADD_USER:
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
        student: payload.data.data,

      }
    case FAILURE_ADD_STUDENT:
      return {
        ...state,
        error: payload
      }

    case REQUEST_PARENT:
      return {
        ...state,
      }
    case RECEIVE_PARENT:
      return {
        ...state,
        student: payload.data,
      }
    case FAILURE_PARENT:
      return {
        ...state,
        error: payload
      }
    case REQUEST_ADD_ADDRESS:
      return {
        ...state,
      }
    case RECEIVE_ADD_ADDRESS:
      return {
        ...state,
        addresses: payload.data.data,
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
        contacts: payload.data.data,
      }
    case FAILURE_ADD_CONTACT:
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
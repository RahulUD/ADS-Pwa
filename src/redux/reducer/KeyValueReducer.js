import {
  REQUEST_GET_FOOTER,
  RECEIVE_GET_FOOTER,
  FAILURE_GET_FOOTER,
  REQUEST_GET_FAQ_TITLE,
  RECEIVE_GET_FAQ_TITLE,
  FAILURE_GET_FAQ_TITLE,
  REQUEST_GET_OBJECTIVE,
RECEIVE_GET_OBJECTIVE,
FAILURE_GET_OBJECTIVE,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  footer: [],
  objectives : [],
  faqtitle: null,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_OBJECTIVE:
      return {
        ...state,
      }
    case RECEIVE_GET_OBJECTIVE:
      return {
        ...state,
        objectives: payload.data.data
      }
    case FAILURE_GET_OBJECTIVE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_FAQ_TITLE:
      return {
        ...state,
      }
    case RECEIVE_GET_FAQ_TITLE:
      return {
        ...state,
        faqtitle: payload.data.data
      }
    case FAILURE_GET_FAQ_TITLE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_FOOTER:
      return {
        ...state,
      }
    case RECEIVE_GET_FOOTER:
      return {
        ...state,
        footer: payload.data.data
      }
    case FAILURE_GET_FOOTER:
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
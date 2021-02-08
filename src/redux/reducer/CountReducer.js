import {
  REQUEST_COUNT_STUDENT,
  RECEIVE_COUNT_STUDENT,
  FAILURE_COUNT_STUDENT,
  REQUEST_COUNT_TEACHER,
  RECEIVE_COUNT_TEACHER,
  FAILURE_COUNT_TEACHER,
  REQUEST_COUNT_ADMIN,
  RECEIVE_COUNT_ADMIN,
  FAILURE_COUNT_ADMIN,
  REQUEST_COUNT_NONTEACHING,
  RECEIVE_COUNT_NONTEACHING,
  FAILURE_COUNT_NONTEACHING,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  studentCount: 0,
  teacherCount: 0,
  adminCount: 0,
  nonTeachingCount: 0,
  error: null,

}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_COUNT_STUDENT:
      return {
        ...state,
      }
    case RECEIVE_COUNT_STUDENT:
      return {
        ...state,
        studentCount: action.payload.data.data
      }
    case FAILURE_COUNT_STUDENT:
      return {
        ...state,

        error: payload.error
      }
    case REQUEST_COUNT_TEACHER:
      return {
        ...state,

      }
    case RECEIVE_COUNT_TEACHER:
      return {
        ...state,

        teacherCount: action.payload.data.data
      }
    case FAILURE_COUNT_TEACHER:
      return {
        ...state,

        error: payload.error
      }
    case REQUEST_COUNT_ADMIN:
      return {
        ...state,

      }
    case RECEIVE_COUNT_ADMIN:
      return {
        ...state,

        adminCount: action.payload.data.data
      }
    case FAILURE_COUNT_ADMIN:
      return {
        ...state,

        error: payload.error
      }
    case REQUEST_COUNT_NONTEACHING:
      return {
        ...state,
      }
    case RECEIVE_COUNT_NONTEACHING:
      return {
        ...state,

        nonTeachingCount: action.payload.data.data
      }
    case FAILURE_COUNT_NONTEACHING:
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

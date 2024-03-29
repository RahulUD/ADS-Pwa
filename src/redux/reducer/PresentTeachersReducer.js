import {
  REQUEST_PRESENT_TEACHER,
  RECEIVE_PRESENT_TEACHER,
  FAILURE_PRESENT_TEACHER,
  REQUEST_GET_TEACHER,
  RECEIVE_GET_TEACHER,
  FAILURE_GET_TEACHER,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  users: null,
  allTeacher: [],
  error: null,

}
const PresentTeachersReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_GET_TEACHER:
      return {
        ...state,
      }
    case RECEIVE_GET_TEACHER:
      return {
        ...state,
        allTeacher: payload.data.data
      }
    case FAILURE_GET_TEACHER:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_PRESENT_TEACHER:
      return {
        ...state,

      }
    case RECEIVE_PRESENT_TEACHER:
      return {
        ...state,

        users: action.payload.data.data
      }
    case FAILURE_PRESENT_TEACHER:
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

export default PresentTeachersReducer
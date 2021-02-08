import {
  REQUEST_STUDENT_LIST,
  RECEIVE_STUDENT_LIST,
  FAILURE_STUDENT_LIST,
} from 'redux/ActionType'
import {StudentInitialData} from 'contract/student'

const initialState = {
  code: null,
  message: null,
  data: StudentInitialData,
  error: null,

}
const StudentReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_STUDENT_LIST:
      return {
        ...state,
      }
    case RECEIVE_STUDENT_LIST:
      return {
        ...state,
        data: action.payload.data.data
      }
    case FAILURE_STUDENT_LIST:
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
export default StudentReducer

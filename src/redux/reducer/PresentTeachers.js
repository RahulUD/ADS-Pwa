import {
    REQUEST_PRESENT_TEACHER,
    RECEIVE_PRESENT_TEACHER,
    FAILURE_PRESENT_TEACHER
  } from './../ActionType'
  
  const initialState = {
    code : null,
    message : null,
    users : null,
    error : null,
    loading : false,
  }
  const PresentTeachers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_PRESENT_TEACHER:
        return {
          ...state,
          loading : true
        }
      case RECEIVE_PRESENT_TEACHER:
        return {
          ...state,
          loading : false,
          users : action.payload.data.data
        }
      case FAILURE_PRESENT_TEACHER:
        return {
          ...state,
          loading : false,
          error : payload.error
        }
      default:
        return {
          ...state
        }
    }
  }
  
  export default PresentTeachers
  
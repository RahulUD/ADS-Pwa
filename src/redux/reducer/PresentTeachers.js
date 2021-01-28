import {
    REQUEST_PRESENT_TEACHER,
    RECEIVE_PRESENT_TEACHER,
    FAILURE_PRESENT_TEACHER
  } from './../ActionType'
  
  const initialState = {
    code : null,
    message : null,
    user : null,
    error : null
  }
  const PresentTeachers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_PRESENT_TEACHER:
          console.log('REQUEST_PRESENT_TEACHER')
        return {
        }
      case RECEIVE_PRESENT_TEACHER:
          console.log('RECEIVE_PRESENT_TEACHER',payload.token)
        return {
        }
      case FAILURE_PRESENT_TEACHER:
          console.log('FAILURE_PRESENT_TEACHER',payload)
        return {
        }
      default:
        return {
          ...state
        }
    }
  }
  
  export default PresentTeachers
  
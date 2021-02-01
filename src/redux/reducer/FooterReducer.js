import {
    REQUEST_FOOTER,
    RECEIVE_FOOTER,
    FAILURE_FOOTER
  } from './../ActionType'
  
  const initialState = {
    code : null,
    message : null,
    data : null,
    error : null,
    
  }
  const PresentTeachers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_FOOTER:
        return {
          ...state,
          
        }
      case RECEIVE_FOOTER:
        return {
          ...state,
          
          data : action.payload.data.data
        }
      case FAILURE_FOOTER:
        return {
          ...state,
          
          error : payload.error
        }
      default:
        return {
          ...state
        }
    }
  }
  
  export default PresentTeachers
  
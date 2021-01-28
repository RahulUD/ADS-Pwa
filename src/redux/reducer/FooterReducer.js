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
    loading : false,
  }
  const PresentTeachers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_FOOTER:
        return {
          ...state,
          loading : true
        }
      case RECEIVE_FOOTER:
        return {
          ...state,
          loading : false,
          data : action.payload.data.data
        }
      case FAILURE_FOOTER:
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
  
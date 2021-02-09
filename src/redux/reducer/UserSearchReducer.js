import {
    REQUEST_USER_SEARCH,
    RECEIVE_USER_SEARCH,
    FAILURE_USER_SEARCH,
    REQUEST_USER_SELECT
  } from 'redux/ActionType'
  
  const initialState = {
    code : null,
    message : null,
    searchResult : null,
    selectedItem : null,
    error : null,
    
  }
  const PresentTeachers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_USER_SEARCH:
        return {
          ...state,
          
        }
      case RECEIVE_USER_SEARCH:
        return {
          ...state,
          searchResult: payload.data.data
        }
      case FAILURE_USER_SEARCH:
        return {
          ...state,
          error : payload.error
        }
      case REQUEST_USER_SELECT:
          return {
            ...state,
            selectedItem : payload
          }
      default:
        return {
          ...state
        }
    }
  }
  
  export default PresentTeachers
  
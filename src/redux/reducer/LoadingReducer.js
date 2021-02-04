import {
    REQUEST_LOADING,
    RECEIVE_LOADING,
  } from 'redux/ActionType'
  
  const initialState = {
    loading : false,
  }
  export default (state = initialState, action) => {
    const { type } = action
    switch (type) {
      case REQUEST_LOADING:
        return {
          ...state,
          loading : true
        }
      case RECEIVE_LOADING:
        return {
          ...state,
          loading : false,
        }
      default:
        return {
          ...state
        }
    }
  }  
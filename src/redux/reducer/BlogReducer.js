import {
    REQUEST_BLOGS,
    RECEIVE_BLOGS,
    FAILURE_BLOGS,
  } from '../ActionType'
  
  const initialState = {
    code : null,
    message : null,
    data : [
      {title : 'a', description : 'b'}
    ],
    error : null,
    loading : false,
  }
  const BlogReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case REQUEST_BLOGS:
        return {
          ...state,
          loading : true
        }
      case RECEIVE_BLOGS:
        return {
          ...state,
          loading : false,
          data : action.payload.data.data.blogs
        }
      case FAILURE_BLOGS:
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
  
  export default BlogReducer
  
import {
    requestBlogs,
    receiveBlogs,
    failureBlogs,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Blog from 'utility/api/Blog'
  
  export const BlogsAction = (data) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestBlogs())
    return Blog.Blogs(data?.page)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveBlogs(response))
      })
      .catch(error => {
        dispatch(failureBlogs(error))
      })
  }
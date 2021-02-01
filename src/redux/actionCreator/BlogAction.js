import {
    requestBlogs,
    receiveBlogs,
    failureBlogs,
    requestLoading,
    receiveLoading,
  } from '../Action';
  import Blog from '../../utility/api/Blog'
  
  export const BlogsAction = (pageNo) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestBlogs())
    return Blog.Blogs(pageNo)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveBlogs(response))
      })
      .catch(error => {
        dispatch(failureBlogs(error))
      })
  }
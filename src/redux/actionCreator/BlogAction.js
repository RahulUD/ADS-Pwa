import {
    requestBlogs,
    receiveBlogs,
    failureBlogs
  } from '../Action';
  import Blog from '../../utility/api/Blog'
  
  export const BlogsAction = (pageNo) => dispatch => {
    dispatch(requestBlogs())
    return Blog.Blogs(pageNo)
      .then(response => {
        dispatch(receiveBlogs(response))
      })
      .catch(error => {
        dispatch(failureBlogs(error))
      })
  }
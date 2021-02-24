import {
  requestBlogs,
  receiveBlogs,
  failureBlogs,
  requestBlogPost,
receiveBlogPost,
failureBlogPost,
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
export const PostBlogAction = (payload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestBlogPost())
  return Blog.postBlog(payload)
    .then(response => {
      dispatch(receiveLoading())  
      dispatch(receiveBlogPost(response))
    })
    .catch(error => {
      dispatch(failureBlogPost(error))
    })
}
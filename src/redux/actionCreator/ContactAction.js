import {
    requestContactUS,
    receiveContactUS,
    failureContactUS,
    requestLoading,
    receiveLoading,
  } from '../Action';
  import Contact from '../../utility/api/Blog'
  
  export const BlogsAction = (pageNo) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestContactUS())
    return Contact.Blogs(pageNo)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveContactUS(response))
      })
      .catch(error => {
        dispatch(failureContactUS(error))
      })
  }
  
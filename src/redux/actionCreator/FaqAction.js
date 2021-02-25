import {
    requestGetFaq,
    receiveGetFaq,
    failureGetFaq,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Faq from 'utility/api/Faq'
  
  export const GetFaqAction = () => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetFaq())
    return Faq.FaqList()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetFaq(response))
      })
      .catch(error => {
        dispatch(failureGetFaq(error))
      })
  }
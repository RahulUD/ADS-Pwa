import {
    requestContactUS,
    receiveContactUS,
    failureContactUS,
    requestLoading,
    receiveLoading,
  } from '../Action';
  import ContactUs from 'utility/api/ContactUs'
  
  export const ContactUsAction = (payload) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestContactUS())
    return ContactUs.submitContact(payload)
      .then(() =>{
        dispatch(receiveLoading())
        dispatch(receiveContactUS())
      })
      .catch(error => {
        dispatch(failureContactUS(error))
      })
  }
  
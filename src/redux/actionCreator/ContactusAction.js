import {
    requestContactus,
    receiveContactus,
    failureContactus,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Contactus from 'utility/api/Contactus'
  
  export const ContactusAction = (data) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestContactus())
    return Contactus.Contactus(data?.page)
      .then(response => {
        console.log('contactus', response)
        dispatch(receiveLoading())
        dispatch(receiveContactus(response))
      })
      .catch(error => {
        dispatch(failureContactus(error))
      })
  }
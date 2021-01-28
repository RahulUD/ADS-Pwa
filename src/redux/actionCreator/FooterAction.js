import {
    requestFooter,
    receiveFooter,
    failureFooter
  } from '../Action';
  import Ads from '../../utility/api/Ads'
  
  export const FooterAction = () => dispatch => {
    dispatch(requestFooter())
    return Ads.Footer()
      .then(response => {
        dispatch(receiveFooter(response))
      })
      .catch(error => {
        dispatch(failureFooter(error))
      })
  }
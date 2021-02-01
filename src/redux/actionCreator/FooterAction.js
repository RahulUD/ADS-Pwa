import {
    requestFooter,
    receiveFooter,
    failureFooter,
    requestLoading,
    receiveLoading,
  } from '../Action';
  import Ads from '../../utility/api/Ads'
  
  export const FooterAction = () => dispatch => {
    dispatch(requestFooter())
    dispatch(requestLoading())
    return Ads.Footer()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveFooter(response))
      })
      .catch(error => {
        dispatch(failureFooter(error))
      })
  }
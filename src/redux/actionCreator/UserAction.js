import {
    requestBirthday,
    receiveBirthday,
    failureBirthday,
    requestLoading,
    receiveLoading,
  } from '../Action';
  import User from '../../utility/api/User'
  
  export const BirthdayAction = () => dispatch => {
    dispatch(requestBirthday())
    dispatch(requestLoading())
    return User.Birthday()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveBirthday(response))
      })
      .catch(error => {
        dispatch(failureBirthday(error))
      })
  }
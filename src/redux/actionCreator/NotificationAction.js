import {
    requestGetNotification,
    receiveGetNotification,
    failureGetNotification,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Notifications from 'utility/api/Notifications'
  
  export const NotificationAction = () => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetNotification())
    return Notifications.getNotification()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetNotification(response))
      })
      .catch(error => {
        dispatch(failureGetNotification(error))
      })
  }
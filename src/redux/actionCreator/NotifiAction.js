import {
  requestAddNotifiUser,
  requestRemoveNotifiUser
  } from 'redux/Action';
  
  export const NotifiAddUserAction = (payload) => dispatch => {
    dispatch(requestAddNotifiUser(payload))
  }
  export const NotifiRemoveUserAction = (payload) => dispatch => {
    dispatch(requestRemoveNotifiUser(payload))
  }
import {
  requestAddNotifiUser
  } from 'redux/Action';
  
  export const NotifiAddUserAction = (payload) => dispatch => {
    dispatch(requestAddNotifiUser(payload))
  }
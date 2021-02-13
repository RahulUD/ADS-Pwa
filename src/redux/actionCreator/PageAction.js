import {
  requestPageSetup
  } from 'redux/Action';

  export const PageSetupAction = (payload) => dispatch => {
    dispatch(requestPageSetup(payload))
  }
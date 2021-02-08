import {
  requestPageSetup
  } from 'redux/Action';

  export const PageSetupAction = (payload) => dispatch => {
    console.log('***************** action',payload)
    dispatch(requestPageSetup(payload))
  }
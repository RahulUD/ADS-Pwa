import {
    requestScholor,
    receiveScholor,
    failureScholor,
    requestLoading,
    receiveLoading
  } from "redux/Action";

import Scholor from "utility/api/Scholor";

  export const GetScholorAction = (payload) => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestScholor());
    return Scholor.GetScholors(payload)
      .then(response => {
        dispatch(receiveLoading());
        dispatch(receiveScholor(response));
      })
      .catch((error) => {
        dispatch(failureScholor(error));
      });
  };
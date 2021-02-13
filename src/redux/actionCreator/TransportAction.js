import {
    requestTransport,
    receiveTransport,
    failureTransport,
    requestLoading,
    receiveLoading
  } from "redux/Action";

import Transport from "utility/api/Transport";

  export const GetTransportAction = (payload) => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestTransport());
    return Transport.GetTransports(payload)
      .then(response => {
        dispatch(receiveLoading());
        dispatch(receiveTransport(response));
      })
      .catch((error) => {
        dispatch(failureTransport(error));
      });
  };
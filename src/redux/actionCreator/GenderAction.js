import {
    requestGetGender,
    receiveGetGender,
    failureGetGender,
    requestLoading,
    receiveLoading
  } from "redux/Action";

import Gender from "utility/api/Gender";

  export const GetGenderAction = (payload) => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestGetGender());
    return Gender.GetGenders(payload)
      .then(response => {
        dispatch(receiveLoading());
        dispatch(receiveGetGender(response));
      })
      .catch((error) => {
        dispatch(failureGetGender(error));
      });
  };
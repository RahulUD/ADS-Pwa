import {
    requestRegister,
    receiveRegister,
    failureRegister,
    
    requestLoading,
    receiveLoading
  } from "redux/Action";
  
import RegisterPost from "utility/api/RegisterPost";
  
  export const RegisterAction= (data) => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestRegister());
    return RegisterPost.Register(data?.page)
      .then((response) => {
        dispatch(receiveLoading());
        dispatch(receiveRegister(response));
      })
      .catch((error) => {
        dispatch(failureRegister(error));
      });
  };

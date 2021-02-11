import {
    requestGetAddressType,
    receiveGetAddressType,
    failureGetAddressType,
    requestLoading,
    receiveLoading
  } from "redux/Action";
import AddressType from "utility/api/AddressType";

  export const GetAddressTypeAction = () => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestGetAddressType());
    return AddressType.getAddresstypes()
      .then(response => {
        dispatch(receiveLoading());
        dispatch(receiveGetAddressType(response));
      })
      .catch((error) => {
        dispatch(failureGetAddressType(error));
      });
  };
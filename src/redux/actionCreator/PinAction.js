import {
  requestStates,
  receiveStates,
  failureStates,
  requestDistricts,
  receiveDistricts,
  failureDistricts,
  requestPins,
  receivePins,
  failurePins,
  requestLoading,
  receiveLoading
} from "redux/Action";
import Pin from "utility/api/Pin";

export const GetStatesAction = () => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestStates());
  return Pin.getStates()
    .then(response => {
      dispatch(receiveLoading());
      dispatch(receiveStates(response));
    })
    .catch((error) => {
      dispatch(failureStates(error));
    });
};
export const GetDistrictsAction = payload => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestDistricts());
  return Pin.getDistricts(payload)
    .then(response => {
      dispatch(receiveLoading());
      dispatch(receiveDistricts(response));
    })
    .catch((error) => {
      dispatch(failureDistricts(error));
    });
};
export const GetPinsAction = (payload) => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestPins());
  return Pin.getPins(payload)
    .then(response => {
      dispatch(receiveLoading());
      dispatch(receivePins(response));
    })
    .catch((error) => {
      dispatch(failurePins(error));
    });
};
import {
  requestGetContactType,
  receiveGetContactType,
  failureGetContactType,
  requestLoading,
  receiveLoading
} from "redux/Action";
import ContactType from "utility/api/ContactType";

export const GetContactTypeAction = () => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestGetContactType());
  return ContactType.getContacttypes()
    .then(response => {
      dispatch(receiveLoading());
      dispatch(receiveGetContactType(response));
    })
    .catch((error) => {
      dispatch(failureGetContactType(error));
    });
};
import {
  requestContactUs,
  receiveContactUs,
  failureContactUs,
  requestContactUsPost,
  receiveContactUsPost,
  failureContactUsPost,
  requestLoading,
  receiveLoading
} from "redux/Action";
import ContactUs from "utility/api/ContactUs";

export const ContactUsAction = (data) => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestContactUs());
  return ContactUs.ContactUs(data?.page)
    .then((response) => {
      dispatch(receiveLoading());
      dispatch(receiveContactUs(response));
    })
    .catch((error) => {
      dispatch(failureContactUs(error));
    });
};
export const ContactUsPostAction = (payload) => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestContactUsPost());
  return ContactUs.submitContact(payload)
    .then(() => {
      dispatch(receiveLoading());
      dispatch(receiveContactUsPost());
    })
    .catch((error) => {
      dispatch(failureContactUsPost(error));
    });
};

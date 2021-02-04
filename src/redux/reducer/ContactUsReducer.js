import {
  REQUEST_CONTACT_US,
  RECEIVE_CONTACT_US,
  FAILURE_CONTACT_US,
  REQUEST_CONTACT_US_POST,
  RECEIVE_CONTACT_US_POST,
  FAILURE_CONTACT_US_POST,
} from 'redux/ActionType'
import { contactusInitialdata } from 'contract/contactus'

const initialState = {
  code: null,
  message: null,
  data: contactusInitialdata,
  error: null,

}
const ContactusReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_CONTACT_US:
      return {
        ...state,

      }
    case RECEIVE_CONTACT_US:
      return {
        ...state,

        data: action.payload.data.data.contactus
      }
    case FAILURE_CONTACT_US:
      return {
        ...state,

        error: payload.error
      }
    case REQUEST_CONTACT_US_POST:
      return {
        ...state,
      }
    case RECEIVE_CONTACT_US_POST:
      return {
        ...state,
        message: "Submitted Successfully"
      }
    case FAILURE_CONTACT_US_POST:
      return {
        ...state,
        message: "Failed Try again",
        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}
export default ContactusReducer

import {
  REQUEST_CONTACTUS,
  RECEIVE_CONTACTUS,
  FAILURE_CONTACTUS,
} from 'redux/ActionType'
import {contactusInitialdata} from 'contract/contactus'

const initialState = {
  code: null,
  message: null,
  data: contactusInitialdata,
  error: null,

}
const ContactusReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_CONTACTUS:
      return {
        ...state,

      }
    case RECEIVE_CONTACTUS:
      return {
        ...state,

        data: action.payload.data.data.contactus
      }
    case FAILURE_CONTACTUS:
      return {
        ...state,

        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}

export default ContactusReducer

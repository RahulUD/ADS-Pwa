import {
  REQUEST_CONTACTUS,
  RECEIVE_CONTACTUS,
  FAILURE_CONTACTUS,
} from 'redux/ActionType'
import { contactusInitialdata } from 'contract/contactus'
import { REQUEST_CONTACTUS_POST } from 'redux/ActionType'
import { RECEIVE_CONTACTUS_POST } from 'redux/ActionType'
import { FAILURE_CONTACTUS_POST } from 'redux/ActionType'
import { ENQUIRY_SUCCESS } from 'utility/constant/Message'
import { ENQUIRY_FAILURE } from 'utility/constant/Message'

const initialState = {
  code: null,
  message: null,
  data: contactusInitialdata,

  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_CONTACTUS:
      return {
        ...state,

      }
    case RECEIVE_CONTACTUS:
      return {
        ...state,

        message: ENQUIRY_SUCCESS

      }
    case FAILURE_CONTACTUS:
      return {
        ...state,
        message: ENQUIRY_FAILURE,
        error: payload.error
      }

    case REQUEST_CONTACTUS_POST:
      return {
        ...state,

      }
    case RECEIVE_CONTACTUS_POST:
      return {
        ...state,

        message: "SUBMITTED SUCCESSFULLY"
      }
    case FAILURE_CONTACTUS_POST:
      return {
        ...state,
        message: " NOT SUBMITTED SUCCESSFULLY",
        error: payload.error
      }

    default:
      return {
        ...state
      }
  }
}
import { ENQUIRY_FAILURE } from "utility/constant/Message"
import { ENQUIRY_SUCCESS } from "utility/constant/Message"
import {REQUEST_CONTACTUS,
    RECEIVE_CONTACTUS,
    FAILURE_CONTACTUS
  } from "../ActionType"

  const initialState ={
    code : null,
    message : null,
    error : null,
  }

  const ContactUsReducer =(state=initialState, action) =>{
    const {type, payload} =action
    switch(type) {
      case REQUEST_CONTACTUS:
      return{
        ...state,
        
      }
      case RECEIVE_CONTACTUS:
        return{
          ...state,
          
        message:ENQUIRY_SUCCESS
  
        }
        case FAILURE_CONTACTUS:
          return{
            ...state,
            message:ENQUIRY_FAILURE,
            error:payload.error
          }
      default:
        return{
          ...state
        }

    }
  }
  export default ContactUsReducer;
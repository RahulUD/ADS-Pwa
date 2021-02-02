import {REQUEST_CONTACTUS,
    RECEIVE_CONTACTUS,
    FAILURE_CONTACTUS
  } from "../ActionType"

  const initialState ={
    code : null,
    message : null,
    data : null,
      
    
    error : null,
    loading : false,
  }

  const ContactUsReducer =(state=initialState, action) =>{
    const {type, payload} =action
    switch(type) {
      case REQUEST_CONTACTUS:
      return{
        ...state,
        loading: true
      }
      case RECEIVE_CONTACTUS:
        return{
          ...state,
          loading: false,
          data : action.payload.data.data.contactus
        }
        case FAILURE_CONTACTUS:
          return{
            ...state,
            loading: false,
            error:payload.error
          }
      default:
        return{
          ...state
        }

    }
  }
  export default ContactUsReducer;
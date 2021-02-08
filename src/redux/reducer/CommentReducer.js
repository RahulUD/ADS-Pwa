import { REQUEST_COMMENT_POST,
    RECEIVE_COMMENT_POST,
    FAILURE_COMMENT_POST
  } from "redux/ActionType";

  const initialState = {
    code: null,
    message: null,
    error: null,
  
  }
 export default  (state= initialState, action) =>{
    
        const { type, payload } = action
        switch (type) {
          case REQUEST_COMMENT_POST:
            return {
              ...state,
      
            }
          case RECEIVE_COMMENT_POST:
            return {
              ...state,
      
              message: "Submitted Successfully"
            }
          case  FAILURE_COMMENT_POST:
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
  
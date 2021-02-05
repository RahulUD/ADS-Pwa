import {
  REQUEST_STD_LIST,
  RECEIVE_STD_LIST,
  FAILURE_STD_LIST,
  REQUEST_UPDATE_STD_ID,
  RECEIVE_UPDATE_STD_ID,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  stdId : 1,
  data:null,
  error: null,

}
const StdReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_UPDATE_STD_ID:
      return {
        ...state,
      }
    case RECEIVE_UPDATE_STD_ID:
      return {
        ...state,
        stdId: action.payload
      }
    case REQUEST_STD_LIST:
      return {
        ...state,

      }
    case RECEIVE_STD_LIST:
      return {
        ...state,

        data: action.payload.data.data
      }
    case FAILURE_STD_LIST:
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

export default StdReducer

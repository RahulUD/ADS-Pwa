import {
  REQUEST_ADD_NOTIFI_USER,
  REQUEST_BALANCE,
RECEIVE_BALANCE,
FAILURE_BALANCE
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  balance: null,
  std: [],
  users: [],
  error: null,
}
const NotifiReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_ADD_NOTIFI_USER:
      console.log('notifi payload ..........', payload)
      return {
        ...state,
        users: payload
      }
    case REQUEST_BALANCE:
      return {
        ...state,
      }
    case RECEIVE_BALANCE:
      console.log('notifi payload ..........', payload)
      return {
        ...state,
        balance: payload.data
      }
    case FAILURE_BALANCE:
      console.log('notifi payload ..........', payload)
      return {
        ...state,
        console: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default NotifiReducer

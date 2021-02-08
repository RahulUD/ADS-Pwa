import {
  REQUEST_ADD_NOTIFI_USER,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  std : [],
  users: [],
  error: null,
}
const NotifiReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_ADD_NOTIFI_USER:
      return {
        ...state,
        users: payload.users
      }
    default:
      return {
        ...state
      }
  }
}

export default NotifiReducer

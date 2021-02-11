import {
  requestLoading,
  receiveLoading,
  requestAddUser,
  receiveAddUser,
  failureAddUser,
} from 'redux/Action';
import Member from 'utility/api/Member';

export const AddUserAction = (payload) => dispatch => {
  dispatch(requestAddUser())
  dispatch(requestLoading())
  return Member.AddUser(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddUser(response))
    })
    .catch(error => {
      dispatch(failureAddUser(error))
    })
}
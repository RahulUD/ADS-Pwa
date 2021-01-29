import {
  requestLogin,
  receiveLogin,
  failureLogin
} from '../Action';
import Auth from '../../utility/api/Auth'

export const LoginAction = ($payload) => dispatch => {
  dispatch(requestLogin())
  return Auth.Login($payload)
    .then(response => {
      dispatch(receiveLogin(response))
    })
    .catch(error => {
      dispatch(failureLogin(error))
    })
}
import {
  requestLogin,
  receiveLogin,
  failureLogin
} from '../Action';
import Auth from '../../utility/api/Auth'
import {setTokeninLocalStorage, setUserinLocalStorage} from './../../utility/method/LocalStorageMethod'

export const LoginAction = ($payload) => dispatch => {
  dispatch(requestLogin())
  return Auth.Login($payload)
    .then(response => {
      setTokeninLocalStorage(response)
      setUserinLocalStorage(response)
      dispatch(receiveLogin(response))
    })
    .catch(error => {
      dispatch(failureLogin(error))
    })
}
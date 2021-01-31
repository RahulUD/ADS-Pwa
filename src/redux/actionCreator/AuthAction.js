import {
  requestLogin,
  receiveLogin,
  failureLogin,
  receiveLoginFromSession,
} from '../Action';
import Auth from '../../utility/api/Auth'
import {setTokeninLocalStorage, setUserinLocalStorage} from './../../utility/method/LocalStorageMethod'
import { USER, TOKEN } from 'utility/constant/LocalStorage';


export const loginFromSession = () => dispatch => {
  const data = {user : localStorage.getItem(USER), token : localStorage.getItem(TOKEN)}
  dispatch(receiveLoginFromSession(data))
}

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
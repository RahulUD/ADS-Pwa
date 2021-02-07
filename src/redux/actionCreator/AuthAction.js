import {
  requestLogin,
  receiveLogin,
  failureLogin,
  requestLogout,
  receiveLogout,
  failureLogout,
  receiveLoginFromSession,
  requestLoading,
    receiveLoading,
} from 'redux/Action';
import Auth from 'utility/api/Auth'
import {setTokeninLocalStorage, setUserinLocalStorage, unsetTokeninLocalStorage, unsetUserinLocalStorage} from 'utility/method/LocalStorageMethod'
import { USER, TOKEN } from 'utility/constant/LocalStorage';


export const loginFromSession = () => dispatch => {
  const data = {user : JSON.parse(localStorage.getItem(USER)), token : localStorage.getItem(TOKEN)}
  dispatch(receiveLoginFromSession(data))
}

export const LoginAction = ($payload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestLogin())
  return Auth.Login($payload)
    .then(response => {
      dispatch(receiveLoading())
      setTokeninLocalStorage(response)
      setUserinLocalStorage(response)
      dispatch(receiveLogin(response))
    })
    .catch(error => {
      dispatch(failureLogin(error))
    })
}
export const LogoutAction = () => dispatch => {
  dispatch(requestLogout())
   dispatch(requestLoading())
  return Auth.Logout()
    .then(response => {
      dispatch(receiveLoading())
      unsetTokeninLocalStorage()
      unsetUserinLocalStorage()
      dispatch(receiveLogout(response))
    })
    .catch(error => {
      dispatch(failureLogout(error))
    })
}

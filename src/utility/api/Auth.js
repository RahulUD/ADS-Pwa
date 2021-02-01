import { LOGIN, LOGOUT } from '../constant/EndPoints'
import Api from './Api'

export default {
  Login($payload) {
    return Api().post(LOGIN, $payload)
  },
  Logout() {
    return Api().get(LOGOUT)
  },
}
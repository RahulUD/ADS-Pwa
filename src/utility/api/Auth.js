import { LOGIN, LOGOUT } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Login($payload) {
    return Api().post(LOGIN, $payload)
  },
  Logout() {
    return Api().get(LOGOUT)
  },
}
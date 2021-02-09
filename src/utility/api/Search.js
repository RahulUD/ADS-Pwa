import { USER_SEARCH } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
    SearchUser(payload) {
    return Api().get(USER_SEARCH+payload)
  }
}
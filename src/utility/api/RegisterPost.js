import { POST_REGISTER } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Register() {
    return Api().post(POST_REGISTER)
  },
}
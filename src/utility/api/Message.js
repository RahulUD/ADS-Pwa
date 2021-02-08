import { POST_MESSAGE, POST_GROUP_MESSAGE, SMS_BALANCE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  postMessage(payload) {
    return Api().post(POST_MESSAGE, payload)
  },
  postGroupMessage(payload) {
    return Api().post(POST_GROUP_MESSAGE, payload)
  },
  smsBalance() {
    return Api().get(SMS_BALANCE)
  }
}
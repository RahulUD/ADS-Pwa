import { POST_MESSAGE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  postMessage(payload) {
    return Api().post(POST_MESSAGE, payload)
  }
}
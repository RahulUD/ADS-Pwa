import { COMMENT_POST } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  commentPost(payload) {
    return Api().post(COMMENT_POST,payload)
  }
}
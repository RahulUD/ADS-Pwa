import { GET_NOTIFICATION } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getNotification() {
    return Api().get(GET_NOTIFICATION)
  }
}
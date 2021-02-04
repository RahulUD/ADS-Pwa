import { PRESENT_TEACHERS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  presentTeacher() {
    return Api().get(PRESENT_TEACHERS)
  }
}
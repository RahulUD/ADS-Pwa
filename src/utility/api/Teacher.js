import { PRESENT_TEACHERS } from '../constant/EndPoints'
import Api from './Api'

export default {
  presentTeacher() {
    return Api().get(PRESENT_TEACHERS)
  }
}
import { STUDENT_LIST } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  StudentList(payload) {
    return Api().get(STUDENT_LIST+'/'+payload)
  }
}
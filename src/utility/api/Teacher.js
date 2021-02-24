import { PRESENT_TEACHERS, ALL_CONTACT } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  presentTeacher() {
    return Api().get(PRESENT_TEACHERS)
  },
  allTeacher(pageNo=1){
    return Api().get(ALL_CONTACT+pageNo)
  }
}
import { GET_ALUMINIS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  AluminiList(pageNo=1) {
    return Api().get(GET_ALUMINIS+pageNo)
  }
}
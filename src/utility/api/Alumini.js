import { GET_ALUMINIS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  AluminiList() {
    return Api().get(GET_ALUMINIS)
  }
}
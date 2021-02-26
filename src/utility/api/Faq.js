import { GET_FAQ } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  FaqList() {
    return Api().get(GET_FAQ)
  }
}
import Api from 'utility/api/Api'
import { GET_SCHOLOR } from 'utility/constant/EndPoints'
export default {
  GetScholors() {
    return Api().get(GET_SCHOLOR)
  }
}
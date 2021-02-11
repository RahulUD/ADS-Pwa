import { GET_GENDRES } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  GetGenders() {
    return Api().get(GET_GENDRES)
  }
}
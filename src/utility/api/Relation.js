import { GET_RELATIONS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getRelations() {
    return Api().get(GET_RELATIONS)
  }
}
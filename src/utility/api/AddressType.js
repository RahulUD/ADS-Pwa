import { GET_ADDRESS_TYPE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getAddresstypes() {
    return Api().get(GET_ADDRESS_TYPE)
  }
}
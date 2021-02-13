import { GET_TRANSPORT } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  GetTransports() {
    return Api().get(GET_TRANSPORT)
  }
}
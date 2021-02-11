import { GET_CONTACT_TYPE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getContacttypes() {
    return Api().get(GET_CONTACT_TYPE)
  }
}
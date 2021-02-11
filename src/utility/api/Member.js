import { ADD_USER } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  AddUser(payload) {
    return Api().post(ADD_USER,payload)
  }
}
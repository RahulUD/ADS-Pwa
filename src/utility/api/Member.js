import { ADD_USER, ADD_STUDENT, PARENT, ADD_ADDRESS, ADD_CONTACT } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  AddUser(payload) {
    return Api().post(ADD_USER,payload)
  },
  AddStudent(payload){
    return Api().post(ADD_STUDENT, payload)
  },
  Parent(payload){
    return Api().post(PARENT, payload)
  },
  AddAddress(payload){
    return Api().post(ADD_ADDRESS, payload)
  },
  AddContact(payload){
    return Api().post(ADD_CONTACT, payload)
  }
}

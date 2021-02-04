import { CONTACT_US, CONTACT_US_POST } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  ContactUs(pageNo=1) {
    return Api().get(CONTACT_US+pageNo)
  },
  submitContact(payload) {
    return Api().post(CONTACT_US_POST, payload)
  }
}
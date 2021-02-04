import { CONTACTUS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  ContactUs(pageNo=1) {
    return Api().get(CONTACTUS+pageNo)
  }
}
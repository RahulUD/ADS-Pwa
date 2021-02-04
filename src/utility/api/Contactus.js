import { CONTACTUS ,CONTACTUSPOST} from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  ContactUs(pageNo=1) {
    return Api().get(CONTACTUS+pageNo)
  },
  ContactUsPost(payload) {
    return Api().post(CONTACTUSPOST,payload)
  }

}
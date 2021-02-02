import { CONTACTUS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Contactus(pageNo=1) {
    return Api().get(CONTACTUS+pageNo)
  }
}
import { CONTACTUS} from "utility/constant/EndPoints";
import Api from './Api'

export default {
  submitContact(payload) {
    return Api().post(CONTACTUS,payload)
  }
}
import { ContactUS} from "../"
import Api from './Api'

export default {
  ContactUs(pageNo=1) {
    return Api().get(ContactUs)
  }
}
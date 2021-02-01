import { ContactUS} from "../"
import Api from './Api'

export default {
  ContactUS(pageNo=1) {
    return Api().get(Contactus)
  }
}
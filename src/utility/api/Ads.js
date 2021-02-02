import { FOOTER } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Footer() {
    return Api().get(FOOTER)
  }
}
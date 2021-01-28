import { FOOTER } from '../constant/EndPoints'
import Api from './Api'

export default {
  Footer() {
    return Api().get(FOOTER)
  }
}
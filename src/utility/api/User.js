import { BIRTHDAY } from '../constant/EndPoints'
import Api from './Api'

export default {
  Birthday() {
    return Api().get(BIRTHDAY)
  },
}
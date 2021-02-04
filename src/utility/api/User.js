import { BIRTHDAY } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Birthday() {
    return Api().get(BIRTHDAY)
  },
}
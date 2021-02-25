import { GET_HOLIDAYS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  HolidayList() {
    return Api().get(GET_HOLIDAYS)
  }
}
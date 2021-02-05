import { STD_LIST } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  StdList() {
    return Api().get(STD_LIST)
  }
}
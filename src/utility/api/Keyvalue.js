import { GET_FOOTER, GET_FAQ_TITLE, GET_OBJECTIVE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getFooter() {
    return Api().get(GET_FOOTER)
  },
  getFaqTitle() {
    return Api().get(GET_FAQ_TITLE)
  },
  getObjective() {
    return Api().get(GET_OBJECTIVE)
  },
}
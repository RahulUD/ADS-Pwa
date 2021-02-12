import {
  GET_STATES,
  GET_DISTRICTS,
  GET_PINS
} from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getPins(payload) {
    return Api().get(GET_PINS+payload)
  },
  getDistricts(payload) {
    return Api().get(GET_DISTRICTS+payload)
  },
  getStates() {
    return Api().get(GET_STATES)
  }
}
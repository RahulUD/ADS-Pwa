import {
  GET_STATES,
  GET_DISTRICTS,
  GET_PINS
} from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  getPins() {
    return Api().get(GET_STATES)
  },
  getDistricts() {
    return Api().get(GET_DISTRICTS)
  },
  getStates() {
    return Api().get(GET_PINS)
  }
}
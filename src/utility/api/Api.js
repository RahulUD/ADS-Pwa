import axios from 'axios'
import { BASE_URL_GLOBAL, BASE_URL_LOCAL } from '../constant/EndPoints'
import { AUTH } from '../constant/LocalStorage'
import { AUTHORIZATION, BEARER } from '../constant/Headers'
let LOCAL = 1
let BaseApi =
  LOCAL === 1
    ? axios.create({ baseURL: BASE_URL_LOCAL })
    : axios.create({ baseURL: BASE_URL_GLOBAL })

let Api = function() {
  let token = localStorage.getItem(AUTH)
  if (token) {
    BaseApi.defaults.headers.common[AUTHORIZATION] = `${BEARER} ${token}`
  }
  return BaseApi
}
export default Api
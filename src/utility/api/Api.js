import axios from 'axios'
import { BASE_URL_GLOBAL, BASE_URL_LOCAL } from 'utility/constant/EndPoints'
import { TOKEN } from 'utility/constant/LocalStorage'
import { AUTHORIZATION, BEARER } from 'utility/constant/Headers'
let LOCAL = 1
let BaseApi =
  LOCAL === 2
    ? axios.create({ baseURL: BASE_URL_LOCAL })
    : axios.create({ baseURL: BASE_URL_GLOBAL })

let Api = function() {
  let token = localStorage.getItem(TOKEN)
  if (token) {
    BaseApi.defaults.headers.common[AUTHORIZATION] = `${BEARER} ${token}`
  }
  return BaseApi
}
export default Api
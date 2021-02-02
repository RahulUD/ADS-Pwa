import { BLOGS } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Blogs(pageNo=1) {
    return Api().get(BLOGS+pageNo)
  }
}
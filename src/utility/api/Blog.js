import { BLOGS } from '../constant/EndPoints'
import Api from './Api'

export default {
  Blogs(pageNo=1) {
    return Api().get(BLOGS+pageNo)
  }
}
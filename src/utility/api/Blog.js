import { BLOGS, BLOG, POST_BLOG} from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  Blogs(pageNo=1) {
    return Api().get(BLOGS+pageNo)
  },
  Blog(payload) {
    return Api().get(BLOG+payload)
  },
  postBlog(payload) {
    return Api().post(POST_BLOG,payload)
  }
}
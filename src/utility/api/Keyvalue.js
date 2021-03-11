import { GET_ABOUT_TEACHER,
  GET_FEATURE,
  GET_ACTIVITY_TITLE,
GET_ACTIVITY,
  GET_SPORT, GET_FOOTER, GET_FAQ_TITLE, GET_OBJECTIVE, GET_DESK_MESSAGE, GET_ABOUTUS_DESC, GET_SAILENT_FEATURE } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'
import { GET_ENQUERY_FORM } from 'utility/constant/EndPoints'
import { GET_REGISTRATTION_FORM } from 'utility/constant/EndPoints'

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
  getDeskMessage() {
    return Api().get(GET_DESK_MESSAGE)
  },
  getAboutusDesc(){
    return Api().get(GET_ABOUTUS_DESC)
  },
  getSailentFeature(){
    return Api().get(GET_SAILENT_FEATURE)
  },
  getAboutTeacher(){
    return Api().get(GET_ABOUT_TEACHER)
  },
  getFeature(){
    return Api().get(GET_FEATURE)
  },
  getSport(){
    return Api().get(GET_SPORT)
  },
  getActivity(){
    return Api().get(GET_ACTIVITY)
  },
  getActivityTitle(){
    return Api().get(GET_ACTIVITY_TITLE)
  },
  getEnqueryForm(){
    return Api().get(GET_ENQUERY_FORM)
  },
  getRegistrationForm(){
    return Api().get(GET_REGISTRATTION_FORM)
  },
}


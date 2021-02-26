import { GET_THOUGHT_OF_THE_DAY } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  ThoughtOfTheDay() {
    return Api().get(GET_THOUGHT_OF_THE_DAY)
  }
}
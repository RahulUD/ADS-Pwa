import { STUDENT_COUNT, TEACHER_COUNT, ADMIN_COUNT, NON_TEACHING_COUNT } from 'utility/constant/EndPoints'
import Api from 'utility/api/Api'

export default {
  StudentCount() {
    return Api().get(STUDENT_COUNT)
  },
  TeacherCount() {
    return Api().get(TEACHER_COUNT)
  },
  AdminCount() {
    return Api().get(ADMIN_COUNT)
  },
  NonteachingCount() {
    return Api().get(NON_TEACHING_COUNT)
  }
}
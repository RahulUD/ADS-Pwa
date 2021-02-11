import {
  REQUEST_PRESENT_TEACHER,
  RECEIVE_PRESENT_TEACHER,
  FAILURE_PRESENT_TEACHER,
  REQUEST_FOOTER,
  RECEIVE_FOOTER,
  FAILURE_FOOTER,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
  RECEIVE_LOGIN_FROM_SESSION,
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
  FAILURE_BLOGS,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT,
  FAILURE_LOGOUT,
  REQUEST_LOADING,
  RECEIVE_LOADING,
  REQUEST_BIRTHDAY,
  RECEIVE_BIRTHDAY,
  FAILURE_BIRTHDAY,
  REQUEST_CONTACT_US,
  RECEIVE_CONTACT_US,
  FAILURE_CONTACT_US,
  REQUEST_CONTACT_US_POST,
  RECEIVE_CONTACT_US_POST,
  FAILURE_CONTACT_US_POST,
  REQUEST_STUDENT_LIST,
  RECEIVE_STUDENT_LIST,
  FAILURE_STUDENT_LIST,
  REQUEST_STD_LIST,
  RECEIVE_STD_LIST,
  FAILURE_STD_LIST,
  REQUEST_UPDATE_STD_ID,
  RECEIVE_UPDATE_STD_ID,
  REQUEST_COUNT_STUDENT,
  RECEIVE_COUNT_STUDENT,
  FAILURE_COUNT_STUDENT,
  REQUEST_COUNT_TEACHER,
  RECEIVE_COUNT_TEACHER,
  FAILURE_COUNT_TEACHER,
  REQUEST_COUNT_ADMIN,
  RECEIVE_COUNT_ADMIN,
  FAILURE_COUNT_ADMIN,
  REQUEST_COUNT_NONTEACHING,
  RECEIVE_COUNT_NONTEACHING,
  FAILURE_COUNT_NONTEACHING,
  REQUEST_POST_MESSAGE,
  RECEIVE_POST_MESSAGE,
  FAILURE_POST_MESSAGE,
  REQUEST_PAGE_SETUP,
  REQUEST_ADD_NOTIFI_USER,
  REQUEST_REMOVE_NOTIFI_USER,
  REQUEST_COMMENT_POST,
  RECEIVE_COMMENT_POST,
  FAILURE_COMMENT_POST,
  REQUEST_BALANCE,
  RECEIVE_BALANCE,
  FAILURE_BALANCE,
  REQUEST_USER_SEARCH,
  RECEIVE_USER_SEARCH,
  FAILURE_USER_SEARCH,
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  FAILURE_ADD_USER,
  REQUEST_GET_GENDER,
  RECEIVE_GET_GENDER,
  FAILURE_GET_GENDER,

} from 'redux/ActionType'

// gender
export const requestGetGender = () => ({
  type: REQUEST_GET_GENDER
})
export const receiveGetGender = payload => ({
  type: RECEIVE_GET_GENDER,
  payload
})
export const failureGetGender = payload => ({
  type: FAILURE_GET_GENDER,
  payload
})

// Add User
export const requestAddUser = () => ({
  type: REQUEST_ADD_USER
})
export const receiveAddUser = payload => ({
  type: RECEIVE_ADD_USER,
  payload
})
export const failureAddUser = payload => ({
  type: FAILURE_ADD_USER,
  payload
})

// user Search
export const requestUserSelect = () => ({
  type: REQUEST_USER_SEARCH
})
export const requestUserSearch = () => ({
  type: REQUEST_USER_SEARCH
})
export const receiveUserSearch = payload => ({
  type: RECEIVE_USER_SEARCH,
  payload
})
export const failureUserSearch = payload => ({
  type: FAILURE_USER_SEARCH,
  payload
})

// message Balance
export const requestBalance = () => ({
  type: REQUEST_BALANCE
})
export const receiveBalance = payload => ({
  type: RECEIVE_BALANCE,
  payload
})
export const failureBalance = payload => ({
  type: FAILURE_BALANCE,
  payload
})

// post message
export const requestCommentPost = () => ({
  type: REQUEST_COMMENT_POST
})
export const receiveCommentPost = payload => ({
  type: RECEIVE_COMMENT_POST,
  payload
})
export const failureCommentPost = payload => ({
  type: FAILURE_COMMENT_POST,
  payload
})

// notifi

export const requestRemoveNotifiUser = payload => ({
  type: REQUEST_REMOVE_NOTIFI_USER,
  payload
})
export const requestAddNotifiUser = payload => ({
  type: REQUEST_ADD_NOTIFI_USER,
  payload
})

// Page setup
export const requestPageSetup = payload => ({
  type: REQUEST_PAGE_SETUP,
  payload
})

// post message
export const requestPostMessage = () => ({
  type: REQUEST_POST_MESSAGE
})
export const receivePostMessage = payload => ({
  type: RECEIVE_POST_MESSAGE,
  payload
})
export const failurePostMessage = payload => ({
  type: FAILURE_POST_MESSAGE,
  payload
})

// get Counts
export const requestGetStudentCount = () => ({
  type: REQUEST_COUNT_STUDENT
})
export const receiveGetStudentCount = payload => ({
  type: RECEIVE_COUNT_STUDENT,
  payload
})
export const failureGetStudentCount = payload => ({
  type: FAILURE_COUNT_STUDENT,
  payload
})

// get std list
export const requestGetTeacherCount = () => ({
  type: REQUEST_COUNT_TEACHER
})
export const receiveGetTeacherCount = payload => ({
  type: RECEIVE_COUNT_TEACHER,
  payload
})
export const failureGetTeacherCount = payload => ({
  type: FAILURE_COUNT_TEACHER,
  payload
})

// get std list
export const requestGetAdminCount = () => ({
  type: REQUEST_COUNT_ADMIN
})
export const receiveGetAdminCount = payload => ({
  type: RECEIVE_COUNT_ADMIN,
  payload
})
export const failureGetAdminCount = payload => ({
  type: FAILURE_COUNT_ADMIN,
  payload
})

// get std list
export const requestGetNonteachingCount = () => ({
  type: REQUEST_COUNT_NONTEACHING
})
export const receiveGetNonteachingCount = payload => ({
  type: RECEIVE_COUNT_NONTEACHING,
  payload
})
export const failureGetNonteachingCount = payload => ({
  type: FAILURE_COUNT_NONTEACHING,
  payload
})

// update std id
export const requestStdIdUpdate = () => ({
  type: REQUEST_UPDATE_STD_ID
})
export const receiveStdIdUpdate = payload => ({
  type: RECEIVE_UPDATE_STD_ID,
  payload
})

// get std list
export const requestStdList = () => ({
  type: REQUEST_STD_LIST
})
export const receiveStdList = payload => ({
  type: RECEIVE_STD_LIST,
  payload
})
export const failureStdList = payload => ({
  type: FAILURE_STD_LIST,
  payload
})


// get student list
export const requestStudentList = () => ({
  type: REQUEST_STUDENT_LIST
})
export const receiveStudentList = payload => ({
  type: RECEIVE_STUDENT_LIST,
  payload
})
export const failureStudentList = payload => ({
  type: FAILURE_STUDENT_LIST,
  payload
})

// contactus
export const requestContactUs = () => ({
  type: REQUEST_CONTACT_US
})
export const receiveContactUs = payload => ({
  type: RECEIVE_CONTACT_US,
  payload
})
export const failureContactUs = payload => ({
  type: FAILURE_CONTACT_US,
  payload
})

// contactuspost
export const requestContactUsPost = () => ({
  type: REQUEST_CONTACT_US_POST
})
export const receiveContactUsPost = payload => ({
  type: RECEIVE_CONTACT_US_POST,
  payload
})
export const failureContactUsPost = payload => ({
  type: FAILURE_CONTACT_US_POST,
  payload
})

// BIRTHDAY
export const requestBirthday = () => ({
  type: REQUEST_BIRTHDAY
})
export const receiveBirthday = payload => ({
  type: RECEIVE_BIRTHDAY,
  payload
})
export const failureBirthday = payload => ({
  type: FAILURE_BIRTHDAY,
  payload
})

// LOGOUT
export const requestLoading = () => ({
  type: REQUEST_LOADING
})
export const receiveLoading = () => ({
  type: RECEIVE_LOADING
})

// LOGOUT
export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})
export const receiveLogout = payload => ({
  type: RECEIVE_LOGOUT,
  payload
})
export const failureLogout = payload => ({
  type: FAILURE_LOGOUT,
  payload
})

// blogs
export const requestBlogs = () => ({
  type: REQUEST_BLOGS
})
export const receiveBlogs = payload => ({
  type: RECEIVE_BLOGS,
  payload
})
export const failureBlogs = payload => ({
  type: FAILURE_BLOGS,
  payload
})

// present teacher
export const requestPresentTeacher = () => ({
  type: REQUEST_PRESENT_TEACHER
})
export const receivePresentTeacher = payload => ({
  type: RECEIVE_PRESENT_TEACHER,
  payload
})
export const failurePresentTeacher = payload => ({
  type: FAILURE_PRESENT_TEACHER,
  payload
})

// footer
export const requestFooter = () => ({
  type: REQUEST_FOOTER
})
export const receiveFooter = payload => ({
  type: RECEIVE_FOOTER,
  payload
})
export const failureFooter = payload => ({
  type: FAILURE_FOOTER,
  payload
})

// LOGIN
export const requestLogin = () => ({
  type: REQUEST_LOGIN
})
export const receiveLogin = payload => ({
  type: RECEIVE_LOGIN,
  payload
})
export const failureLogin = payload => ({
  type: FAILURE_LOGIN,
  payload
})
export const receiveLoginFromSession = payload => ({
  type: RECEIVE_LOGIN_FROM_SESSION,
  payload
})
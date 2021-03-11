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
  REQUEST_GET_CONTACT_TYPE,
  RECEIVE_GET_CONTACT_TYPE,
  FAILURE_GET_CONTACT_TYPE,
  REQUEST_GET_ADDRESS_TYPE,
  RECEIVE_GET_ADDRESS_TYPE,
  FAILURE_GET_ADDRESS_TYPE,
  REQUEST_RELATION,
  RECEIVE_RELATION,
  FAILURE_RELATION,
  REQUEST_STATES,
  RECEIVE_STATES,
  FAILURE_STATES,
  REQUEST_DISTRICTS,
  RECEIVE_DISTRICTS,
  FAILURE_DISTRICTS,
  REQUEST_PINS,
  RECEIVE_PINS,
  FAILURE_PINS,
  REQUEST_TRANSPORT,
  RECEIVE_TRANSPORT,
  FAILURE_TRANSPORT,
  REQUEST_SCHOLOR,
  RECEIVE_SCHOLOR,
  FAILURE_SCHOLOR,
  REQUEST_ADD_STUDENT,
  RECEIVE_ADD_STUDENT,
  FAILURE_ADD_STUDENT,
  REQUEST_PARENT,
  RECEIVE_PARENT,
  FAILURE_PARENT,
  REQUEST_ADD_ADDRESS,
  RECEIVE_ADD_ADDRESS,
  FAILURE_ADD_ADDRESS,
  REQUEST_ADD_CONTACT,
  RECEIVE_ADD_CONTACT,
  FAILURE_ADD_CONTACT,
  REQUEST_ADD_DOCUMENT,
  RECEIVE_ADD_DOCUMENT,
  FAILURE_ADD_DOCUMENT,
  REQUEST_UPDATE_PROGRESS,
  REQUEST_GET_TEACHER,
  RECEIVE_GET_TEACHER,
  FAILURE_GET_TEACHER,
  REQUEST_POST_BLOG,
  RECEIVE_POST_BLOG,
  FAILURE_POST_BLOG,
  REQUEST_POST_REGISTER,
  RECEIVE_POST_REGISTER,
  FAILURE_POST_REGISTER,
  REQUEST_GET_HOLIDAYS,
  RECEIVE_GET_HOLIDAYS,
  FAILURE_GET_HOLIDAYS,
  REQUEST_GET_FAQ,
  RECEIVE_GET_FAQ,
  FAILURE_GET_FAQ,
  REQUEST_GET_NOTIFICATION,
  RECEIVE_GET_NOTIFICATION,
  FAILURE_GET_NOTIFICATION,
  REQUEST_GET_ALUMINI,
  RECEIVE_GET_ALUMINI,
  FAILURE_GET_ALUMINI,
  REQUEST_GET_THOUGHT,
  RECEIVE_GET_THOUGHT,
  FAILURE_GET_THOUGHT,
  REQUEST_GET_FOOTER,
  RECEIVE_GET_FOOTER,
  FAILURE_GET_FOOTER,
  REQUEST_GET_FAQ_TITLE,
  RECEIVE_GET_FAQ_TITLE,
  FAILURE_GET_FAQ_TITLE,
  REQUEST_GET_OBJECTIVE,
  RECEIVE_GET_OBJECTIVE,
  FAILURE_GET_OBJECTIVE,
  REQUEST_GET_DESK_MESSAGE,
  RECEIVE_GET_DESK_MESSAGE,
  FAILURE_GET_DESK_MESSAGE,
  REQUEST_GET_ABOUTUS_DESC,
  RECEIVE_GET_ABOUTUS_DESC,
  FAILURE_GET_ABOUTUS_DESC,
  REQUEST_GET_SAILENT_FEATURE,
  RECEIVE_GET_SAILENT_FEATURE,
  FAILURE_GET_SAILENT_FEATURE,
  REQUEST_GET_ABOUT_TEACHER,
  RECEIVE_GET_ABOUT_TEACHER,
  FAILURE_GET_ABOUT_TEACHER,
  REQUEST_GET_FEATURE,
  RECEIVE_GET_FEATURE,
  FAILURE_GET_FEATURE,
  REQUEST_GET_SPORT,
  RECEIVE_GET_SPORT,
  FAILURE_GET_SPORT,
  REQUEST_GET_ACTIVITY,
  RECEIVE_GET_ACTIVITY,
  FAILURE_GET_ACTIVITY,
  REQUEST_GET_ACTIVITY_TITLE,
  RECEIVE_GET_ACTIVITY_TITLE,
  FAILURE_GET_ACTIVITY_TITLE,
  REQUEST_GET_ENQUERY_FORM,
  RECEIVE_GET_ENQUERY_FORM,
  FAILURE_GET_ENQUERY_FORM,
  REQUEST_GET_REGISTRATION_FORM,
  RECEIVE_GET_REGISTRATION_FORM,
  FAILURE_GET_REGISTRATION_FORM,
} from 'redux/ActionType'

// key value
export const requestRegistrationForm = () => ({
  type: REQUEST_GET_REGISTRATION_FORM,
})
export const receiveRegistrationForm = payload => ({
  type: RECEIVE_GET_REGISTRATION_FORM,
  payload
})
export const failureRegistrationForm = payload => ({
  type: FAILURE_GET_REGISTRATION_FORM,
  payload
})

export const requestEnqueryForm = () => ({
  type: REQUEST_GET_ENQUERY_FORM,
})
export const receiveEnqueryForm = payload => ({
  type: RECEIVE_GET_ENQUERY_FORM,
  payload
})
export const failureEnqueryForm = payload => ({
  type: FAILURE_GET_ENQUERY_FORM,
  payload
})

export const requestGetActivity = () => ({
  type: REQUEST_GET_ACTIVITY,
})
export const receiveGetActivity = payload => ({
  type: RECEIVE_GET_ACTIVITY,
  payload
})
export const failureGetActivity = payload => ({
  type: FAILURE_GET_ACTIVITY,
  payload
})

export const requestGetActivityTitle = () => ({
  type: REQUEST_GET_ACTIVITY_TITLE,
})
export const receiveGetActivityTitle = payload => ({
  type: RECEIVE_GET_ACTIVITY_TITLE,
  payload
})
export const failureGetActivityTitle = payload => ({
  type: FAILURE_GET_ACTIVITY_TITLE,
  payload
})

export const requestGetAboutTeacher = () => ({
  type: REQUEST_GET_ABOUT_TEACHER,
})
export const receiveGetAboutTeacher = payload => ({
  type: RECEIVE_GET_ABOUT_TEACHER,
  payload
})
export const failureGetAboutTeacher = payload => ({
  type: FAILURE_GET_ABOUT_TEACHER,
  payload
})

export const requestGetFeature = () => ({
  type: REQUEST_GET_FEATURE,
})
export const receiveGetFeature = payload => ({
  type: RECEIVE_GET_FEATURE,
  payload
})
export const failureGetFeature = payload => ({
  type: FAILURE_GET_FEATURE,
  payload
})

export const requestGetSport = () => ({
  type: REQUEST_GET_SPORT,
})
export const receiveGetSport = payload => ({
  type: RECEIVE_GET_SPORT,
  payload
})
export const failureGetSport = payload => ({
  type: FAILURE_GET_SPORT,
  payload
})

export const requestGetSailentFeature = () => ({
  type: REQUEST_GET_SAILENT_FEATURE
})
export const receiveGetSailentFeature = payload => ({
  type: RECEIVE_GET_SAILENT_FEATURE,
  payload
})
export const failureGetSailentFeature = payload => ({
  type: FAILURE_GET_SAILENT_FEATURE,
  payload
})

export const requestGetAboutusDesc = () => ({
  type: REQUEST_GET_ABOUTUS_DESC
})
export const receiveGetAboutusDesc = payload => ({
  type: RECEIVE_GET_ABOUTUS_DESC,
  payload
})
export const failureGetAboutusDesc = payload => ({
  type: FAILURE_GET_ABOUTUS_DESC,
  payload
})

export const requestGetDeskMessage = () => ({
  type: REQUEST_GET_DESK_MESSAGE
})
export const receiveGetDeskMessage = payload => ({
  type: RECEIVE_GET_DESK_MESSAGE,
  payload
})
export const failureGetDeskMessage = payload => ({
  type: FAILURE_GET_DESK_MESSAGE,
  payload
})

export const requestGetObjective = () => ({
  type: REQUEST_GET_OBJECTIVE
})
export const receiveGetObjective = payload => ({
  type: RECEIVE_GET_OBJECTIVE,
  payload
})
export const failureGetObjective = payload => ({
  type: FAILURE_GET_OBJECTIVE,
  payload
})

export const requestGetFaqTitle = () => ({
  type: REQUEST_GET_FAQ_TITLE
})
export const receiveGetFaqTitle = payload => ({
  type: RECEIVE_GET_FAQ_TITLE,
  payload
})
export const failureGetFaqTitle = payload => ({
  type: FAILURE_GET_FAQ_TITLE,
  payload
})

export const requestGetFooter = () => ({
  type: REQUEST_GET_FOOTER
})
export const receiveGetFooter = payload => ({
  type: RECEIVE_GET_FOOTER,
  payload
})
export const failureGetFooter = payload => ({
  type: FAILURE_GET_FOOTER,
  payload
})

// thought
export const requestGetThought = () => ({
  type: REQUEST_GET_THOUGHT
})
export const receiveGetThought = payload => ({
  type: RECEIVE_GET_THOUGHT,
  payload
})
export const failureGetThought = payload => ({
  type: FAILURE_GET_THOUGHT,
  payload
})

// alumini
export const requestGetAluminis = () => ({
  type: REQUEST_GET_ALUMINI
})
export const receiveGetAluminis = payload => ({
  type: RECEIVE_GET_ALUMINI,
  payload
})
export const failureGetAluminis = payload => ({
  type: FAILURE_GET_ALUMINI,
  payload
})

// notification
export const requestGetNotification = () => ({
  type: REQUEST_GET_NOTIFICATION
})
export const receiveGetNotification = payload => ({
  type: RECEIVE_GET_NOTIFICATION,
  payload
})
export const failureGetNotification = payload => ({
  type: FAILURE_GET_NOTIFICATION,
  payload
})

// faq
export const requestGetFaq = () => ({
  type: REQUEST_GET_FAQ
})
export const receiveGetFaq = payload => ({
  type: RECEIVE_GET_FAQ,
  payload
})
export const failureGetFaq = payload => ({
  type: FAILURE_GET_FAQ,
  payload
})


// post holiday
export const requestGetHolidays = () => ({
  type: REQUEST_GET_HOLIDAYS
})
export const receiveGetHolidays = payload => ({
  type: RECEIVE_GET_HOLIDAYS,
  payload
})
export const failureGetHolidays = payload => ({
  type: FAILURE_GET_HOLIDAYS,
  payload
})

// post blog
export const requestBlogPost = () => ({
  type: REQUEST_POST_BLOG
})
export const receiveBlogPost = payload => ({
  type: RECEIVE_POST_BLOG,
  payload
})
export const failureBlogPost = payload => ({
  type: FAILURE_POST_BLOG,
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


// get teacher
export const requestGetTeacher = () => ({
  type: REQUEST_GET_TEACHER
})
export const receiveGetTeacher = payload => ({
  type: RECEIVE_GET_TEACHER,
  payload
})
export const failureGetTeacher = payload => ({
  type: FAILURE_GET_TEACHER,
  payload
})

// update document
export const requestUpdateDocument = () => ({
  type: REQUEST_ADD_DOCUMENT
})
export const receiveUpdateDocument = payload => ({
  type: RECEIVE_ADD_DOCUMENT,
  payload
})
export const failureUpdateocument = payload => ({
  type: FAILURE_ADD_DOCUMENT,
  payload
})

// progress
export const requestUpdateProgress = (payload) => ({
  type: REQUEST_UPDATE_PROGRESS,
  payload
})

// document
export const requestAddDocument = () => ({
  type: REQUEST_ADD_DOCUMENT
})
export const receiveAddDocument = payload => ({
  type: RECEIVE_ADD_DOCUMENT,
  payload
})
export const failureAddDocument = payload => ({
  type: FAILURE_ADD_DOCUMENT,
  payload
})

// parent
export const requestAddAddress = () => ({
  type: REQUEST_ADD_ADDRESS
})
export const receiveAddAddress = payload => ({
  type: RECEIVE_ADD_ADDRESS,
  payload
})
export const failureAddAddress = payload => ({
  type: FAILURE_ADD_ADDRESS,
  payload
})

// parent
export const requestAddContact = () => ({
  type: REQUEST_ADD_CONTACT
})
export const receiveAddContact = payload => ({
  type: RECEIVE_ADD_CONTACT,
  payload
})
export const failureAddContact = payload => ({
  type: FAILURE_ADD_CONTACT,
  payload
})

// parent
export const requestParent = () => ({
  type: REQUEST_PARENT
})
export const receiveParent = payload => ({
  type: RECEIVE_PARENT,
  payload
})
export const failureParent = payload => ({
  type: FAILURE_PARENT,
  payload
})

// add student
export const requestAddStudent = () => ({
  type: REQUEST_ADD_STUDENT
})
export const receiveAddStudent = payload => ({
  type: RECEIVE_ADD_STUDENT,
  payload
})
export const failureAddStudent = payload => ({
  type: FAILURE_ADD_STUDENT,
  payload
})

// getTransport
export const requestTransport = () => ({
  type: REQUEST_TRANSPORT
})
export const receiveTransport = payload => ({
  type: RECEIVE_TRANSPORT,
  payload
})
export const failureTransport = payload => ({
  type: FAILURE_TRANSPORT,
  payload
})

// getScholor
export const requestScholor = () => ({
  type: REQUEST_SCHOLOR
})
export const receiveScholor = payload => ({
  type: RECEIVE_SCHOLOR,
  payload
})
export const failureScholor = payload => ({
  type: FAILURE_SCHOLOR,
  payload
})

// getPins
export const requestStates = () => ({
  type: REQUEST_STATES
})
export const receiveStates = payload => ({
  type: RECEIVE_STATES,
  payload
})
export const failureStates = payload => ({
  type: FAILURE_STATES,
  payload
})
export const requestDistricts = () => ({
  type: REQUEST_DISTRICTS
})
export const receiveDistricts = payload => ({
  type: RECEIVE_DISTRICTS,
  payload
})
export const failureDistricts = payload => ({
  type: FAILURE_DISTRICTS,
  payload
})
export const requestPins = () => ({
  type: REQUEST_PINS
})
export const receivePins = payload => ({
  type: RECEIVE_PINS,
  payload
})
export const failurePins = payload => ({
  type: FAILURE_PINS,
  payload
})

// getRelation
export const requestRelation = () => ({
  type: REQUEST_RELATION
})
export const receiveRelation = payload => ({
  type: RECEIVE_RELATION,
  payload
})
export const failureRelation = payload => ({
  type: FAILURE_RELATION,
  payload
})

// getAddresstype
export const requestGetAddressType = () => ({
  type: REQUEST_GET_ADDRESS_TYPE
})
export const receiveGetAddressType = payload => ({
  type: RECEIVE_GET_ADDRESS_TYPE,
  payload
})
export const failureGetAddressType = payload => ({
  type: FAILURE_GET_ADDRESS_TYPE,
  payload
})

// getcontacttype
export const requestGetContactType = () => ({
  type: REQUEST_GET_CONTACT_TYPE
})
export const receiveGetContactType = payload => ({
  type: RECEIVE_GET_CONTACT_TYPE,
  payload
})
export const failureGetContactType = payload => ({
  type: FAILURE_GET_CONTACT_TYPE,
  payload
})

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

//REGISTER
export const requestRegister = () => ({
  type: REQUEST_POST_REGISTER
})
export const receiveRegister = payload => ({
  type: RECEIVE_POST_REGISTER,
  payload
})
export const failureRegister = payload => ({
  type: FAILURE_POST_REGISTER,
  payload
})
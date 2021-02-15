import {
  requestLoading,
  receiveLoading,
  requestAddUser,
  receiveAddUser,
  failureAddUser,
  requestAddStudent,
  receiveAddStudent,
  failureAddStudent,
  requestParent,
  receiveParent,
  failureParent,
  requestAddAddress,
  receiveAddAddress,
  failureAddAddress,
  requestAddContact,
  receiveAddContact,
  failureAddContact,
  requestAddDocument,
receiveAddDocument,
failureAddDocument,
requestUpdateProgress,
requestUpdateDocument,
receiveUpdateDocument,
failureUpdateocument,
} from 'redux/Action';
import Member from 'utility/api/Member';


export const UpdateDocumentAction = (payload) => dispatch => {
  dispatch(requestUpdateDocument())
  dispatch(requestLoading())
  return Member.UpdateDocument(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveUpdateDocument(response))
    })
    .catch(error => {
      dispatch(failureUpdateocument(error))
    })
}

export const UpdateProgresAction = (payload) => dispatch => {
  dispatch(requestUpdateProgress(payload))
}

export const AddDocumentAction = (payload) => dispatch => {
  dispatch(requestAddDocument())
  dispatch(requestLoading())
  return Member.AddDocument(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddDocument(response))
    })
    .catch(error => {
      dispatch(failureAddDocument(error))
    })
}

export const AddUserAction = (payload) => dispatch => {
  dispatch(requestAddUser())
  dispatch(requestLoading())
  return Member.AddUser(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddUser(response))
    })
    .catch(error => {
      dispatch(failureAddUser(error))
    })
}
export const AddStudentAction = (payload) => dispatch => {
  dispatch(requestAddStudent())
  dispatch(requestLoading())
  return Member.AddStudent(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddStudent(response))
    })
    .catch(error => {
      dispatch(failureAddStudent(error))
    })
}
export const ParentAction = (payload) => dispatch => {
  dispatch(requestParent())
  dispatch(requestLoading())
  return Member.Parent(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveParent(response))
    })
    .catch(error => {
      dispatch(failureParent(error))
    })
}

export const AddAddressAction = (payload) => dispatch => {
  dispatch(requestAddAddress())
  dispatch(requestLoading())
  return Member.AddAddress(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddAddress(response))
    })
    .catch(error => {
      dispatch(failureAddAddress(error))
    })
}

export const AddContactAction = (payload) => dispatch => {
  dispatch(requestAddContact())
  dispatch(requestLoading())
  return Member.AddContact(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveAddContact(response))
    })
    .catch(error => {
      dispatch(failureAddContact(error))
    })
}
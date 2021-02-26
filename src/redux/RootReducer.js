import { combineReducers } from "redux";
import PresentTeachersReducer from 'redux/reducer/PresentTeachersReducer'
import UserSearchReducer from 'redux/reducer/UserSearchReducer'
import AuthReducer from 'redux/reducer/AuthReducer'
import BlogReducer from 'redux/reducer/BlogReducer'
import LoadingReducer from 'redux/reducer/LoadingReducer'
import BirthdayReducer from 'redux/reducer/BirthdayReducer'
import ContactUsReducer from 'redux/reducer/ContactUsReducer'
import StdReducer from 'redux/reducer/StdReducer'
import StudentReducer from 'redux/reducer/StudentReducer'
import CountReducer from 'redux/reducer/CountReducer'
import PageReducer from 'redux/reducer/PageReducer'
import NotifiReducer from 'redux/reducer/NotifiReducer'
import CommentReducer from 'redux/reducer/NotifiReducer'
import GenderReducer from 'redux/reducer/GenderReducer'
import MemberReducer from 'redux/reducer/MemberReducer'
import ContactTypeReducer from 'redux/reducer/ContactTypeReducer'
import AddressTypeReducer from 'redux/reducer/AddressTypeReducer'
import RelationReducer from 'redux/reducer/RelationReducer'
import PinReducer from 'redux/reducer/PinReducer'
import ScholorReducer from 'redux/reducer/ScholorReducer'
import TransportReducer from 'redux/reducer/TransportReducer'
import HolidayReducer from 'redux/reducer/HolidayReducer'
import NotificationReducer from 'redux/reducer/NotificationReducer'
import FaqReducer from 'redux/reducer/FaqReducer'
import AluminiReducer from 'redux/reducer/AluminiReducer'
import ThoughtReducer from 'redux/reducer/ThoughtReducer'

const RootReducer = combineReducers({
    ThoughtReducer,
    AluminiReducer,
    FaqReducer,
    NotificationReducer,
    HolidayReducer,
    PresentTeachersReducer,
    UserSearchReducer,
    AuthReducer,
    BlogReducer,
    LoadingReducer,
    BirthdayReducer,
    ContactUsReducer,
    StdReducer,
    StudentReducer,
    CountReducer,
    PageReducer,
    NotifiReducer,
    CommentReducer,
    GenderReducer,
    MemberReducer,
    ContactTypeReducer,
    AddressTypeReducer,
    RelationReducer,
    PinReducer,
    ScholorReducer,
    TransportReducer,
});
export default RootReducer;
// 08626 nitish kumar 8292671739
import { combineReducers } from "redux";
import PresentTeachersReducer from 'redux/reducer/PresentTeachersReducer'
import FooterReducer from 'redux/reducer/FooterReducer'
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

    const RootReducer = combineReducers({
        PresentTeachersReducer,
        FooterReducer,
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
        CommentReducer
    });
export default RootReducer;
// 08626 nitish kumar 8292671739
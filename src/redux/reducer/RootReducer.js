import { combineReducers } from "redux";
import PresentTeachersReducer from './PresentTeachersReducer'
import FooterReducer from './FooterReducer'
import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'
import LoadingReducer from './LoadingReducer'
import ContactUsReducer from './ContactUsReducer'


    const RootReducer = combineReducers({
        PresentTeachersReducer,
        FooterReducer,
        AuthReducer,
        BlogReducer,
        LoadingReducer,
        ContactUsReducer
    });

export default RootReducer;
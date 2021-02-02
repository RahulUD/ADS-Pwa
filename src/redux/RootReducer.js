import { combineReducers } from "redux";
import PresentTeachersReducer from './reducer/PresentTeachersReducer'
import FooterReducer from './reducer/FooterReducer'
import AuthReducer from './reducer/AuthReducer'
import BlogReducer from './reducer/BlogReducer'
import LoadingReducer from './reducer/LoadingReducer'
import BirthdayReducer from './reducer/BirthdayReducer'



    const RootReducer = combineReducers({
        PresentTeachersReducer,
        FooterReducer,
        AuthReducer,
        BlogReducer,
        LoadingReducer,
        BirthdayReducer,
    });

export default RootReducer;
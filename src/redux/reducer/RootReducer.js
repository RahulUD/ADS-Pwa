import { combineReducers } from "redux";
import PresentTeachersReducer from './PresentTeachersReducer'
import FooterReducer from './FooterReducer'
import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'


    const RootReducer = combineReducers({
        PresentTeachersReducer,
        FooterReducer,
        AuthReducer,
        BlogReducer
    });

export default RootReducer;
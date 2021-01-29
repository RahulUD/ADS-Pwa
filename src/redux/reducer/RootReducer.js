import { combineReducers } from "redux";
import PresentTeachers from './PresentTeachers'
import FooterReducer from './FooterReducer'
import AuthReducer from './AuthReducer'

    const RootReducer = combineReducers({
        PresentTeachersReducer: PresentTeachers,
        FooterReducer,
        AuthReducer,
    });

export default RootReducer;
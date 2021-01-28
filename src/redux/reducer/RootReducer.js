import { combineReducers } from "redux";
import PresentTeachers from './PresentTeachers'
import FooterReducer from './FooterReducer'

    const RootReducer = combineReducers({
        PresentTeachersReducer: PresentTeachers,
        FooterReducer,
    });

export default RootReducer;
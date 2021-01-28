import { combineReducers } from "redux";
import PresentTeachers from './PresentTeachers'

    const RootReducer = combineReducers({

        PresentTeachersReducer: PresentTeachers,

    });

export default RootReducer;
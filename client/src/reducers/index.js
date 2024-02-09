import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser"
import questionReducer from "./question"
import usersReducer from "./users";

const rootReducer = combineReducers({
    authReducer,
    currentUserReducer,
    questionReducer,
    usersReducer,
});

export default rootReducer;
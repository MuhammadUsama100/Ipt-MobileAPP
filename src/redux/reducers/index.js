import { combineReducers } from "redux";
import userReducer from './user';
import offenseReducer from './offense';
import locationReducer from './location';
import complaintReducer from './complaint';

export default combineReducers({
    userReducer,
    offenseReducer,
    locationReducer,
    complaintReducer,
});

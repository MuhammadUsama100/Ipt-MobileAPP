import { combineReducers } from "redux";
import userLogin from './user-login.reducer';
import userSignup from './user-signup.reducer';

export default combineReducers({
  userLogin,
  userSignup,
});
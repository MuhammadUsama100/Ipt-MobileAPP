import { combineReducers } from "redux";
import registerComplaint from './register-complaint.reducer';
import getMyComplaints from './get-my-complaints.reducer';

export default combineReducers({
  registerComplaint,
  getMyComplaints,
});
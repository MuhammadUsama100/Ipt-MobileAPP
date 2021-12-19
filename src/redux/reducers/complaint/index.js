import { combineReducers } from "redux";
import registerComplaint from './register-complaint.reducer';
import getMyComplaints from './get-my-complaints.reducer';
import getAllComplaints from './get-all-complaints.reducer';
import getComplaintStats from './get-complaint-stats.reducer';

export default combineReducers({
  registerComplaint,
  getMyComplaints,
  getAllComplaints,
  getComplaintStats,
});
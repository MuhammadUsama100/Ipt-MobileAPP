export const REGISTER_COMPLAINT_INIT_ACTION = '[Register Complaint] Init';
export const registerComplaintInit = (payload) => ({
  type: REGISTER_COMPLAINT_INIT_ACTION,
  payload,
});

export const REGISTER_COMPLAINT_SUCCESS_ACTION = '[Register Complaint] Success';
export const registerComplaintSuccess = (payload) => ({
  type: REGISTER_COMPLAINT_SUCCESS_ACTION,
  payload
});

export const REGISTER_COMPLAINT_FAIL_ACTION = '[Register Complaint] Fail';
export const registerComplaintFail = (payload) => ({
  type: REGISTER_COMPLAINT_FAIL_ACTION,
  payload
});

export const REGISTER_COMPLAINT_CLEAR_ACTION = '[Register Complaint] Clear';
export const registerComplaintClear = (payload) => ({
  type: REGISTER_COMPLAINT_CLEAR_ACTION,
  payload
});

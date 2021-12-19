export const GET_ALL_COMPLAINTS_INIT_ACTION = '[Get All Complaints] Init';
export const getAllComplaintsInit = (payload) => ({
  type: GET_ALL_COMPLAINTS_INIT_ACTION,
  payload,
});

export const GET_ALL_COMPLAINTS_SUCCESS_ACTION = '[Get All Complaints] Success';
export const getAllComplaintsSuccess = (payload) => ({
  type: GET_ALL_COMPLAINTS_SUCCESS_ACTION,
  payload
});

export const GET_ALL_COMPLAINTS_FAIL_ACTION = '[Get All Complaints] Fail';
export const getAllComplaintsFail = (payload) => ({
  type: GET_ALL_COMPLAINTS_FAIL_ACTION,
  payload
});

export const GET_ALL_COMPLAINTS_CLEAR_ACTION = '[Get All Complaints] Clear';
export const getAllComplaintsClear = (payload) => ({
  type: GET_ALL_COMPLAINTS_CLEAR_ACTION,
  payload
});

export const GET_MY_COMPLAINTS_INIT_ACTION = '[Get My Complaints] Init';
export const getMyComplaintsInit = (payload) => ({
  type: GET_MY_COMPLAINTS_INIT_ACTION,
  payload,
});

export const GET_MY_COMPLAINTS_SUCCESS_ACTION = '[Get My Complaints] Success';
export const getMyComplaintsSuccess = (payload) => ({
  type: GET_MY_COMPLAINTS_SUCCESS_ACTION,
  payload
});

export const GET_MY_COMPLAINTS_FAIL_ACTION = '[Get My Complaints] Fail';
export const getMyComplaintsFail = (payload) => ({
  type: GET_MY_COMPLAINTS_FAIL_ACTION,
  payload
});

export const GET_MY_COMPLAINTS_CLEAR_ACTION = '[Get My Complaints] Clear';
export const getMyComplaintsClear = (payload) => ({
  type: GET_MY_COMPLAINTS_CLEAR_ACTION,
  payload
});

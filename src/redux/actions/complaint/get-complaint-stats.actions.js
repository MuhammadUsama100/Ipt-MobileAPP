export const GET_COMPLAINT_STATS_INIT_ACTION = '[Get Complaint Stats] Init';
export const getComplaintStatsInit = (payload) => ({
  type: GET_COMPLAINT_STATS_INIT_ACTION,
  payload,
});

export const GET_COMPLAINT_STATS_SUCCESS_ACTION = '[Get Complaint Stats] Success';
export const getComplaintStatsSuccess = (payload) => ({
  type: GET_COMPLAINT_STATS_SUCCESS_ACTION,
  payload
});

export const GET_COMPLAINT_STATS_FAIL_ACTION = '[Get Complaint Stats] Fail';
export const getComplaintStatsFail = (payload) => ({
  type: GET_COMPLAINT_STATS_FAIL_ACTION,
  payload
});

export const GET_COMPLAINT_STATS_CLEAR_ACTION = '[Get Complaint Stats] Clear';
export const getComplaintStatsClear = (payload) => ({
  type: GET_COMPLAINT_STATS_CLEAR_ACTION,
  payload
});

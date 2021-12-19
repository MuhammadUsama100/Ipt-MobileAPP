export const GET_ALL_OFFENSE_INIT_ACTION = '[Get All Offense] Init';
export const getAllOffenseInit = (payload) => ({
  type: GET_ALL_OFFENSE_INIT_ACTION,
  payload,
});

export const GET_ALL_OFFENSE_SUCCESS_ACTION = '[Get All Offense] Success';
export const getAllOffenseSuccess = (payload) => ({
  type: GET_ALL_OFFENSE_SUCCESS_ACTION,
  payload
});

export const GET_ALL_OFFENSE_FAIL_ACTION = '[Get All Offense] Fail';
export const getAllOffenseFail = (payload) => ({
  type: GET_ALL_OFFENSE_FAIL_ACTION,
  payload
});

export const GET_ALL_OFFENSE_CLEAR_ACTION = '[Get All Offense] Clear';
export const getAllOffenseClear = (payload) => ({
  type: GET_ALL_OFFENSE_CLEAR_ACTION,
  payload
});

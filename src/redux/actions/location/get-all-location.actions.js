export const GET_ALL_LOCATION_INIT_ACTION = '[Get All Location] Init';
export const getAllLocationInit = (payload) => ({
  type: GET_ALL_LOCATION_INIT_ACTION,
  payload,
});

export const GET_ALL_LOCATION_SUCCESS_ACTION = '[Get All Location] Success';
export const getAllLocationSuccess = (payload) => ({
  type: GET_ALL_LOCATION_SUCCESS_ACTION,
  payload
});

export const GET_ALL_LOCATION_FAIL_ACTION = '[Get All Location] Fail';
export const getAllLocationFail = (payload) => ({
  type: GET_ALL_LOCATION_FAIL_ACTION,
  payload
});

export const GET_ALL_LOCATION_CLEAR_ACTION = '[Get All Location] Clear';
export const getAllLocationClear = (payload) => ({
  type: GET_ALL_LOCATION_CLEAR_ACTION,
  payload
});

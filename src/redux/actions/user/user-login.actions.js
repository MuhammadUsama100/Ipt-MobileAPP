export const LOGIN_USER_INIT_ACTION = '[Login User] Init';
export const loginUserInit = (payload) => ({
  type: LOGIN_USER_INIT_ACTION,
  payload,
});

export const LOGIN_USER_SUCCESS_ACTION = '[Login User] Success';
export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS_ACTION,
  payload
});

export const LOGIN_USER_FAIL_ACTION = '[Login User] Fail';
export const loginUserFail = (payload) => ({
  type: LOGIN_USER_FAIL_ACTION,
  payload
});

export const LOGOUT_USER = '[Logout User] ';
export const logoutUser = () => ({
  type: LOGOUT_USER
});

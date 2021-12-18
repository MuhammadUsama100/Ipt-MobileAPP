export const SIGNUP_USER_INIT_ACTION = '[Signup User] Init';
export const signupUserInit = (payload) => ({
  type: SIGNUP_USER_INIT_ACTION,
  payload,
});

export const SIGNUP_USER_SUCCESS_ACTION = '[Signup User] Success';
export const signupUserSuccess = (payload) => ({
  type: SIGNUP_USER_SUCCESS_ACTION,
  payload
});

export const SIGNUP_USER_FAIL_ACTION = '[Signup User] Fail';
export const signupUserFail = (payload) => ({
  type: SIGNUP_USER_FAIL_ACTION,
  payload
});

export const SIGNUP_USER_CLEAR_ACTION = '[Signup User] Clear';
export const signupUserClear = (payload) => ({
  type: SIGNUP_USER_CLEAR_ACTION,
  payload
});

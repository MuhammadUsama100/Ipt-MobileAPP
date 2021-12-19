export const POST_ENDORSEMENT_INIT_ACTION = '[Post Endorsement] Init';
export const postEndorsementInit = (payload) => ({
  type: POST_ENDORSEMENT_INIT_ACTION,
  payload,
});

export const POST_ENDORSEMENT_SUCCESS_ACTION = '[Post Endorsement] Success';
export const postEndorsementSuccess = (payload) => ({
  type: POST_ENDORSEMENT_SUCCESS_ACTION,
  payload
});

export const POST_ENDORSEMENT_FAIL_ACTION = '[Post Endorsement] Fail';
export const postEndorsementFail = (payload) => ({
  type: POST_ENDORSEMENT_FAIL_ACTION,
  payload
});

export const POST_ENDORSEMENT_CLEAR_ACTION = '[Post Endorsement] Clear';
export const postEndorsementClear = (payload) => ({
  type: POST_ENDORSEMENT_CLEAR_ACTION,
  payload
});

import {
    SIGNUP_USER_INIT_ACTION,
    SIGNUP_USER_FAIL_ACTION,
    SIGNUP_USER_SUCCESS_ACTION,
    SIGNUP_USER_CLEAR_ACTION
  } from "../../actions";
  
  const initialState = {
    isLoading: false,
    isFetched: false,
    isFailed: false,
    isSuccess: false,
    error: null,
    data: null,
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_USER_INIT_ACTION:
        return {
          ...state,
          isLoading: true,
          isFetched: false,
          isSuccess: false,
          isFailed: false,
          error: null,
        }
      case SIGNUP_USER_SUCCESS_ACTION:
        return {
          ...state,
          isFetched: true,
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          data: action.payload
        }
      case SIGNUP_USER_FAIL_ACTION:
        return {
          ...state,
          isLoading: false,
          isFetched: true,
          isFailed: true,
          isSuccess: false,
          error: action.payload
        }
      case SIGNUP_USER_CLEAR_ACTION:
        return {
          ...initialState
        }
  
      default:
        return state
    }
  }
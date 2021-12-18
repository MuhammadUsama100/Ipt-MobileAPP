import {
    LOGIN_USER_INIT_ACTION,
    LOGIN_USER_FAIL_ACTION,
    LOGIN_USER_SUCCESS_ACTION,
    LOGOUT_USER
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
      case LOGIN_USER_INIT_ACTION:
        return {
          ...state,
          isLoading: true,
          isFetched: false,
          isSuccess: false,
          isFailed: false,
          error: null,
        }
      case LOGIN_USER_SUCCESS_ACTION:
        return {
          ...state,
          isFetched: true,
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          data: action.payload
        }
      case LOGIN_USER_FAIL_ACTION:
        return {
          ...state,
          isLoading: false,
          isFetched: true,
          isFailed: true,
          isSuccess: false,
          error: action.payload
        }
      case LOGOUT_USER:
        return {
          ...initialState
        }
  
      default:
        return state
    }
  }
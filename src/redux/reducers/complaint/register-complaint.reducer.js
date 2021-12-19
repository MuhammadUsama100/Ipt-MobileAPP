import {
    REGISTER_COMPLAINT_INIT_ACTION,
    REGISTER_COMPLAINT_FAIL_ACTION,
    REGISTER_COMPLAINT_SUCCESS_ACTION,
    REGISTER_COMPLAINT_CLEAR_ACTION
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
      case REGISTER_COMPLAINT_INIT_ACTION:
        return {
          ...state,
          isLoading: true,
          isFetched: false,
          isSuccess: false,
          isFailed: false,
          error: null,
        }
      case REGISTER_COMPLAINT_SUCCESS_ACTION:
        return {
          ...state,
          isFetched: true,
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          data: action.payload
        }
      case REGISTER_COMPLAINT_FAIL_ACTION:
        return {
          ...state,
          isLoading: false,
          isFetched: true,
          isFailed: true,
          isSuccess: false,
          error: action.payload
        }
      case REGISTER_COMPLAINT_CLEAR_ACTION:
        return {
          ...initialState
        }
  
      default:
        return state
    }
  }
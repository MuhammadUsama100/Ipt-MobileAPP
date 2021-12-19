import {
    GET_ALL_OFFENSE_INIT_ACTION,
    GET_ALL_OFFENSE_FAIL_ACTION,
    GET_ALL_OFFENSE_SUCCESS_ACTION,
    GET_ALL_OFFENSE_CLEAR_ACTION
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
      case GET_ALL_OFFENSE_INIT_ACTION:
        return {
          ...state,
          isLoading: true,
          isFetched: false,
          isSuccess: false,
          isFailed: false,
          error: null,
        }
      case GET_ALL_OFFENSE_SUCCESS_ACTION:
        return {
          ...state,
          isFetched: true,
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          data: action.payload
        }
      case GET_ALL_OFFENSE_FAIL_ACTION:
        return {
          ...state,
          isLoading: false,
          isFetched: true,
          isFailed: true,
          isSuccess: false,
          error: action.payload
        }
      case GET_ALL_OFFENSE_CLEAR_ACTION:
        return {
          ...initialState
        }
  
      default:
        return state
    }
  }
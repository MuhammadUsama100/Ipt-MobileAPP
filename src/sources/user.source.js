import { LOGIN_USER, SIGNUP_USER } from "../../constants/source.constants";
import { 
    loginUserFail, 
    loginUserInit, 
    loginUserSuccess,
    logoutUser as logout, 
    signupUserFail, 
    signupUserInit, 
    signupUserSuccess
} from "../redux/actions";
import { removeFromAsyncStorage, setToAsyncStorage } from "../utils";
import axios from 'axios';

export const loginUser = ({ email, password }, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(loginUserInit());
        axios.post(LOGIN_USER, {
            email,
            password
        }, {
            headers: {
                'Authorization': null
            }
        }).then(res => {
            let data = res.data['data'];
            data['token'] = data['jwt'];
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setToAsyncStorage('user', JSON.stringify(data));
            console.log(typeof data, data);
            dispatch(loginUserSuccess(data));
        })
        .catch(err => {
            console.log(err.response.status);
            errorHandler(err.response.status);
            dispatch(loginUserFail(err.response.status));
        });
    }
}

export const signupUser = (data, errorHandler = () => { }) => {
    return (dispatch, getState) => {
        dispatch(signupUserInit());
        axios.post(SIGNUP_USER, {
            ...data
        }, {
            headers: {
                'x-auth-token': null
            }
        }).then(res => {
            dispatch(signupUserSuccess(res.data));
        })
        .catch(err => {
            errorHandler(err.response.data);
            dispatch(signupUserFail(err.response.data));
        });
    }
}

export const logoutUser = () => {
    return dispatch => {
      dispatch(logout());
      axios.defaults.headers.common['Authorization'] = undefined;
      removeFromAsyncStorage('user');
    }
  }

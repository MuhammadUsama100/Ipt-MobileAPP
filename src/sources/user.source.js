import { LOGIN_USER } from "../../constants/source.constants";
import { loginUserFail, loginUserInit, loginUserSuccess } from "../redux/actions";
import { setToAsyncStorage } from "../utils";
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
            res.data['token'] = res.data['jwt'];
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            setToAsyncStorage('user', JSON.stringify(res.data));
            dispatch(loginUserSuccess(res));
            // dispatch(getUserProfile(res.data));
        })
        .catch(err => {
            errorHandler(err.response.data);
            dispatch(loginUserFail(err.response.data));
        });
    }
}
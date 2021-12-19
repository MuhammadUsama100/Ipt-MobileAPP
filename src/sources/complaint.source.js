import { GET_MY_COMPLAINTS, REGISTER_COMPLAINT } from "../../constants/source.constants";
import { getMyComplaintsFail, getMyComplaintsInit, getMyComplaintsSuccess, registerComplaintFail, registerComplaintInit, registerComplaintSuccess } from "../redux/actions";
import axios from 'axios';

export const registerComplaint = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(registerComplaintInit());
        axios.post(REGISTER_COMPLAINT, {
            ...data
        })
        .then(res => {
            console.log(res.data);
            dispatch(registerComplaintSuccess(res.data['data']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(registerComplaintFail(err.response.data));
        });
    }
}

export const getMyComplaints = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(getMyComplaintsInit());
        axios.get(GET_MY_COMPLAINTS)
        .then(res => {
            console.log(res.data);
            dispatch(getMyComplaintsSuccess(res.data['data']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getMyComplaintsFail(err.response.data));
        });
    }
}

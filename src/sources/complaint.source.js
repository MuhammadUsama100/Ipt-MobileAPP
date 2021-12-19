import { GET_MY_COMPLAINTS, REGISTER_COMPLAINT, GET_ALL_COMPLAINTS, GET_COMPLAINT_STATS } from "../../constants/source.constants";
import { 
    getAllComplaintsFail, 
    getAllComplaintsInit, 
    getAllComplaintsSuccess, 
    getComplaintStatsFail, 
    getComplaintStatsInit, 
    getComplaintStatsSuccess, 
    getMyComplaintsFail, 
    getMyComplaintsInit, 
    getMyComplaintsSuccess, 
    registerComplaintFail, 
    registerComplaintInit, 
    registerComplaintSuccess,
} from "../redux/actions";
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
            dispatch(getMyComplaintsSuccess(res.data['data']['$values']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getMyComplaintsFail(err.response.data));
        });
    }
}

export const getAllComplaints = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(getAllComplaintsInit());
        axios.get(GET_ALL_COMPLAINTS, {
            params: {
                ...data
            }
        })
        .then(res => {
            console.log(res);
            dispatch(getAllComplaintsSuccess(res.data['data']['$values']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getAllComplaintsFail(err.response.data));
        });
    }
}

export const getComplaintStats = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(getComplaintStatsInit());
        axios.get(GET_COMPLAINT_STATS)
        .then(res => {
            console.log(res.data);
            dispatch(getComplaintStatsSuccess(res.data['data']['$values']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getComplaintStatsFail(err.response.data));
        });
    }
}

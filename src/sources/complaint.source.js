import { REGISTER_COMPLAINT } from "../../constants/source.constants";
import { registerComplaintFail, registerComplaintInit, registerComplaintSuccess } from "../redux/actions";
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
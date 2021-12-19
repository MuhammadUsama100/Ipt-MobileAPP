import { POST_ENDORSEMENT } from "../../constants/source.constants";
import { postEndorsementFail, postEndorsementInit, postEndorsementSuccess } from "../redux/actions";
import axios from 'axios';

export const postEndorsement = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(postEndorsementInit());
        axios.post(POST_ENDORSEMENT, {
            ...data
        })
        .then(res => {
            console.log(res.data);
            dispatch(postEndorsementSuccess(res.data['data']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(postEndorsementFail(err.response.data));
        });
    }
}

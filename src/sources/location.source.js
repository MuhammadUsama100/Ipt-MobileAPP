import { GET_ALL_LOCATION } from "../../constants/source.constants";
import { getAllLocationFail, getAllLocationInit, getAllLocationSuccess } from "../redux/actions";
import axios from 'axios';

export const getAllLocation = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(getAllLocationInit());
        axios.get(GET_ALL_LOCATION)
        .then(res => {
            dispatch(getAllLocationSuccess(res.data['data']['$values']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getAllLocationFail(err.response.data));
        });
    }
}
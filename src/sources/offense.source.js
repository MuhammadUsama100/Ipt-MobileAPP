import { GET_ALL_OFFENSE } from "../../constants/source.constants";
import { getAllOffenseFail, getAllOffenseInit, getAllOffenseSuccess } from "../redux/actions";
import axios from 'axios';

export const getAllOffense = (data, errorHandler = () => { }) => {
    return (dispatch) => {
        dispatch(getAllOffenseInit());
        axios.get(GET_ALL_OFFENSE)
        .then(res => {
            console.log(res.data);
            dispatch(getAllOffenseSuccess(res.data['data']['$values']));
        })
        .catch(err => {
            console.log(err);
            errorHandler(err.response.data);
            dispatch(getAllOffenseFail(err.response.data));
        });
    }
}
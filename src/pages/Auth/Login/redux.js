import {AUTH} from "../../../store/actions/actionTypes";

export const MapStateToProps = state => ({})
export const MapActionToProps = dispatch => ({
    login (info) {
        dispatch({type: AUTH, payload:info})
    }
})
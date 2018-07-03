import {ADD_ELEMENT} from "../../store/actions/actionTypes";

export const mapStateToProps = state => ({
    toDo: state.toDo,
    // login: state.login
})
export const mapActionToProps = dispatch =>({
    addElementToList (value) {
        dispatch({type:ADD_ELEMENT, payload: value})
    }
})
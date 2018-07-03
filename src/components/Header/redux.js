import {LOGOUT} from '../../store/actions/actionTypes.js'

export const mapStateToProps = state => ({
    auth: state.auth.auth,
    firstName: state.auth.userName,
    lastName:state.auth.userLastName
})
export const mapActionToProps = dispatch => ({
    logOut () {
        dispatch({type: LOGOUT})
    }
})
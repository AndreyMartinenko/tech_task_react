const initState = {
    auth: false,
    userName: '',
    userLastName: ''
}
export default function auth (state = initState, action) {
    switch (action.type) {
        case 'AUTH': {
            return {
                auth: true,
                userName: action.payload.firstName,
                userLastName: action.payload.lastName
            }
        }
        case 'LOGOUT': {
            return {
                auth: false,
                userName: '',
                userLastName: ''
            }
        }
        default: {
            return state
        }
    }
}




















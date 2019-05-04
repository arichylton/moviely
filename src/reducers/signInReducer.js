const INITIAL_STATE = {
    success: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, ...action.payload }
        case 'SIGN_OUT':
            return { ...state, success: false, request_token: null }
        default:
            return state;
    }
}
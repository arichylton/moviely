export default (state='', action) => {
    switch (action.type) {
        case 'ROUTE':
            return action.payload;
        case 'SIGN_OUT':
            return action.payload = '';
        default:
            return state;
    }
}
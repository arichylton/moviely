export default (store=[], action) => {
    switch (action.type) {
        case 'HIGHEST_MOVIES':
            return [...action.payload]
        default:
            return store;
    }
}
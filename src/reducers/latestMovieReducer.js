export default (store=[], action) => {
    switch (action.type) {
        case 'LATEST_MOVIES':
            return [...action.payload];
        default:
            return store;
    }
}
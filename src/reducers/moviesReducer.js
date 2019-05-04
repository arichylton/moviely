export default (store=[], action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return [...action.payload];
        default:
            return store;
    }
}
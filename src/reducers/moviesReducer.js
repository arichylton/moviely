export default (store=[], action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return [...store, ...action.payload];
        default:
            return store;
    }
}
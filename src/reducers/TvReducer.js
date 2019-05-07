export default (store=[], action) => {
    switch (action.type) {
        case 'SEARCH_TV':
            return [...action.payload];
        default:
            return store;
    }
}
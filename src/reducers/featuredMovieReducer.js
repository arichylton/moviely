export default (store=[], action) => {
    switch (action.type) {
        case 'FEATURED_MOVIES':
            return [...action.payload];
        default:
            return store;
    }
}
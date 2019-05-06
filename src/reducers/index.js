import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import signInReducer from './signInReducer';
import loadingReducer from './loadingReducer';
import guestSignInReducer from './guestSignInReducer';
import searchTermReducer from './searchTermReducer';
import windowRouteReducer from './windowRouteReducer';

export default combineReducers({
	moviesReducer,
	loading: loadingReducer,
	isSignedIn: signInReducer,
	guestSignInData: guestSignInReducer,
	searchTerm: searchTermReducer,
	windowRoute: windowRouteReducer
});

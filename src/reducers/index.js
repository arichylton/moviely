import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import signInReducer from './signInReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
	moviesReducer,
	loading: loadingReducer,
	isSignedIn: signInReducer
});

import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import TvReducer from './TvReducer';
import signInReducer from './signInReducer';
import loadingReducer from './loadingReducer';
import guestSignInReducer from './guestSignInReducer';
import searchTermReducer from './searchTermReducer';
import windowRouteReducer from './windowRouteReducer';
import featuredMovieReducer from './featuredMovieReducer';
import highestRatedReducer from './highestRatedReducer';
import latestMovieReducer from './latestMovieReducer';
import findMovieReducer from './findMovieReducer';

export default combineReducers({
	moviesReducer,
	TvReducer,
	loading: loadingReducer,
	isSignedIn: signInReducer,
	guestSignInData: guestSignInReducer,
	searchTerm: searchTermReducer,
	windowRoute: windowRouteReducer,
	featuredMoviesData: featuredMovieReducer,
	highestRatedData: highestRatedReducer,
	latestMovies: latestMovieReducer,
	movieData: findMovieReducer
});

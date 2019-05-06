import axios from 'axios';

export const requestAuthToken = () => async (dispatch) => {
	const response = await axios.get(
		'https://api.themoviedb.org/3/authentication/token/new?api_key=3e17762214fd39739a9e5f272003618d'
	);

	dispatch({ type: 'SIGN_IN', payload: { ...response.data } });
};

export const guestSignIn = () => async (dispatch) => {
	const response = await axios.get(
		'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=3e17762214fd39739a9e5f272003618d'
	);

	dispatch({ type: 'GUEST_SIGN_IN', payload: { ...response.data } });
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const searchMovies = (input) => async (dispatch) => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=3e17762214fd39739a9e5f272003618d&language=en-US&query=${input}&page=1&include_adult=false`
	);

	dispatch(loading(false));
	dispatch(searchTerm(input));

	dispatch({ type: 'SEARCH_MOVIES', payload: response.data.results });
};

export const searchTerm = (input) => {
	return {
		type: 'SEARCH_TERM',
		payload: input
	}
}

export const loading = (boolean) => {
	return {
		type: 'LOADING',
		payload: boolean
	};
};

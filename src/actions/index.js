import axios from 'axios';

export const signIn = () => async dispatch => {
    const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=3e17762214fd39739a9e5f272003618d');

    console.log(response.data);

    dispatch({type: 'SIGN_IN', payload: response.data})
}

export const searchMovies = (input) => async dispatch => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3e17762214fd39739a9e5f272003618d&language=en-US&query=${input}&page=1&include_adult=false`);

    dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});   
}


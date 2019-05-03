import axios from 'axios';

export const searchMovies = (input) => async dispatch => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3e17762214fd39739a9e5f272003618d&language=en-US&query=${input}&page=1&include_adult=false`);

    dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});   
}
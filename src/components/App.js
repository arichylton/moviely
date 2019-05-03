import React from 'react';
import axios from 'axios';

class App extends React.Component {
	state = { data: [] };

	async componentDidMount() {
		const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3e17762214fd39739a9e5f272003618d&language=en-US&query=honey&page=1&include_adult=false`);

        this.setState({ data: response.data.results });
    }
    
    renderMovieList = () => {
        return this.state.data.map(movie => {
            return (
                <div key={movie.id}>
                    <div>{movie.title}</div>
                    <div>{movie.overview}</div>
                </div>
            )
        })
        
    }

	render() {
		return <div>{this.renderMovieList()}</div>;
	}
}

export default App;

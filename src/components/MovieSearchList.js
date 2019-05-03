import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

class App extends React.Component {
	componentDidMount() {
		this.props.searchMovies('honey');
	}

	renderMovieList = () => {
		return this.props.movies.map((movie) => {
			return (
				<div key={movie.id}>
					<div>{movie.title}</div>
				</div>
			);
		});
	};

	render() {
		return <div>{this.renderMovieList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { movies: state.moviesReducer };
};

export default connect(mapStateToProps, { searchMovies })(App);
import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

import './componentStyles/text.css';

class App extends React.Component {
	componentDidMount() {
		this.props.searchMovies('war');
	}

	renderMovieList = () => {
		return this.props.movies.map((movie) => {
			return (
				<div style={{ margin: '20px 0' }} className="content">
					<div key={movie.id}>
						<h4 className="header crop">{movie.title}</h4>
						<img
							style={{ maxWidth: 150, height: 240, borderRadius: 5, boxShadow: '4px 4px 4px rgb(13, 30, 51)' }}
							alt={`${movie.title} picture`}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						/>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<div className="ui container">
					<div style={{ marginTop: 40}} className="ui centered grid">
						{this.renderMovieList()}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { movies: state.moviesReducer };
};

export default connect(mapStateToProps, { searchMovies })(App);

import React from 'react';
import { connect } from 'react-redux';
import { searchMovies, findMovie } from '../actions';

import './componentStyles/text.css';

const placeHolderImage = require('../pics/background-1.jpg');

class App extends React.Component {
	renderMovieList = () => {
		return this.props.movies.map((movie) => {
			if (movie.poster_path === null) {
				return (
					<div key={movie.id} style={{ margin: '30px 20px' }} className="content">
						<div>
							<h4 style={{ margin: '9px auto' }} className="crop">
								{movie.title}
							</h4>
							<h5 style={{ margin: '5px auto 15px auto', color: 'rgb(200, 50, 102)' }} className="crop">
								<i style={{ marginRight: 4 }} className="ui heart icon" />
								{movie.vote_average}
							</h5>
							<a onClick={() => this.props.findMovie(movie.id)}>
								<img
									style={{
										width: 180,
										height: 250,
										borderRadius: 10,
										cursor: 'pointer',
										boxShadow: '4px 4px 4px rgb(6, 20, 40)'
									}}
									alt={`${movie.title} pic`}
									src={placeHolderImage}
								/>
							</a>
						</div>
					</div>
				);
			} else {
				return (
					<div key={movie.id} style={{ margin: '30px 20px' }} className="content">
						<div>
							<h4 style={{ margin: '9px auto' }} className="crop">
								{movie.title}
							</h4>
							<h5 style={{ margin: '5px auto 15px auto', color: 'rgb(200, 50, 102)' }} className="crop">
								<i style={{ marginRight: 4 }} className="ui heart icon" />
								{movie.vote_average}
							</h5>
							<a onClick={() => this.props.findMovie(movie.id)}>
								<img
									style={{
										width: 180,
										height: 250,
										borderRadius: 10,
										cursor: 'pointer',
										boxShadow: '4px 4px 4px rgb(6, 20, 40)'
									}}
									alt={`${movie.title} pic`}
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								/>
							</a>
						</div>
					</div>
				);
			}
		});
	};

	

	searchResultsRender = () => {
		if (!this.props.searchTerm) {
			return <h3>Search for cool movies</h3>;
		} else {
			return (
				<div>
					<h3>
						Search Results for{' '}
						<span style={{ color: '#54c8ff' }}>
							{this.props.searchTerm.charAt(0).toUpperCase() + this.props.searchTerm.slice(1)}
						</span>
					</h3>
					<div className="ui centered grid">{this.renderMovieList()}</div>
				</div>
			);
		}
	};

	render() {
		if (this.props.loading) {
			return (
				<div>
					<div>
						<div className="ui active dimmer">
							<div className="ui big text loader">Searching...</div>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="ui container">
					<div style={{ marginTop: 140 }}>{this.searchResultsRender()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.moviesReducer,
		loading: state.loading,
		guestSignInData: state.guestSignInData,
		searchTerm: state.searchTerm,
	};
};

export default connect(mapStateToProps, { searchMovies, findMovie })(App);
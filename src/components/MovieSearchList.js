import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

import './componentStyles/text.css';

class App extends React.Component {

	renderMovieList = () => {
		if (this.props.guestSignInData.success) {
			return this.props.movies.map((movie) => {
				return (
					<div key={movie.id} style={{ margin: '30px 20px' }} className="content">
						<div>
							<h4 style={{ margin: '9px auto' }} className="crop">
								{movie.title}
							</h4>
							<h5 style={{ margin: '5px auto 15px auto', color: 'rgb(200, 50, 102)' }} className="crop">
								<i style={{ marginRight: 4 }} className="ui star icon" />
								{`${movie.vote_average}`}
							</h5>
							<img
								style={{
									maxWidth: 200,
									minWidth: 170,
									height: 250,
									borderRadius: 10,
									boxShadow: '4px 4px 4px rgb(6, 20, 40)'
								}}
								alt={`${movie.title} pic`}
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							/>
						</div>
					</div>
				);
			});
		} else {
			return this.props.movies.map((movie) => {
				return (
					<div key={movie.id} style={{ margin: '30px 20px' }} className="content">
						<div>
							<h4 style={{ margin: '9px auto' }} className="crop">
								{movie.title}
							</h4>
							<h5 style={{ margin: '5px auto 15px auto', color: 'rgb(200, 50, 102)' }} className="crop">
								<i style={{ marginRight: 4 }} className="ui star icon" />
								{`${movie.vote_average}`}
							</h5>
							<img
								style={{
									maxWidth: 200,
									minWidth: 170,
									height: 250,
									borderRadius: 10,
									boxShadow: '4px 4px 4px rgb(6, 20, 40)'
								}}
								alt={`${movie.title} pic`}
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							/>
						</div>
					</div>
				);
			});
		}
	};

	searchResultsRender = () => {
		if (!this.props.searchTerm) {
			return (
				<h3 className="h1-content">Search for cool movies</h3>				
			)
		} else {
			return (
				<h3>Search Results for <span style={{color: 'rgb(200, 50, 102)'}}>{this.props.searchTerm.charAt(0).toUpperCase() + this.props.searchTerm.slice(1)}</span></h3>
			)
		}
	}

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
					<div style={{ marginTop: 140 }}>
						{this.searchResultsRender()}
						<div className="ui centered grid">{this.renderMovieList()}</div>
					</div>
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
		searchTerm: state.searchTerm
	};
};

export default connect(mapStateToProps, { searchMovies })(App);

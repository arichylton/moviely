import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

import './componentStyles/text.css';
import { voidTypeAnnotation } from '@babel/types';

class App extends React.Component {
	componentDidMount() {
		this.props.searchMovies('space');
	}

	renderMovieList = () => {
		if (this.props.guestSignInData.success) {
			return this.props.movies.map((movie) => {
				return (
					<div key={movie.id} style={{ margin: '40px 20px' }} className="content">
						<div>
							<h4 className="header crop">{movie.title}</h4>							
							<img
								style={{
									maxWidth: 200,
									minWidth: 170,
									height: 210,
									borderRadius: 10,
									boxShadow: '4px 4px 4px rgb(13, 30, 51)'
								}}
								alt={`${movie.title} pic`}
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							/>
							<h4 className="header crop">{movie.vote_average}</h4>
						</div>
					</div>
				);
			});
		} else {
			return this.props.movies.map((movie) => {
				return (
					<div key={movie.id} style={{ margin: '35px 25px' }} className="content">
						<div>
							<h4 style={{margin: '9px auto'}} className="crop">{movie.title}</h4>
							<h5 style={{margin: '5px auto 15px auto', color: 'rgb(200, 50, 102)'}} className="crop"><i style={{marginRight: 4}} className="ui star icon" />{`${movie.vote_average}`}</h5>
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
					<div style={{ marginTop: 90 }} className="ui centered grid">
						{this.renderMovieList()}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { movies: state.moviesReducer, loading: state.loading, guestSignInData: state.guestSignInData };
};

export default connect(mapStateToProps, { searchMovies })(App);

import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import RatingHearts from './RatingHearts';

import '../componentStyles/text.css';
import '../componentStyles/moviePage.css';

class MoviePage extends React.Component {
	commafy(num) {
		if (num === 0) {
			return 'N/A';
		}
		var str = num.toString().split('.');
		if (str[0].length >= 5) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 5) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		return str.join('.');
	}

	profit(revenue, budget) {
		if (revenue === 0 || budget === 0) {
			return (
				<span className="movie-span" style={{ color: 'white' }}>
					N/A
				</span>
			);
		}
		if (revenue - budget >= 0) {
			return (
				<span className="movie-span" style={{ color: '#21ba45' }}>
					<i className="ui green dollar icon" />
					{this.commafy(this.props.movieData.revenue - this.props.movieData.budget)}
				</span>
			);
		} else {
			return (
				<span className="movie-span" style={{ color: '#CD5C5C' }}>
					<i className="ui dollar icon" />
					{this.commafy(this.props.movieData.revenue - this.props.movieData.budget)}
				</span>
			);
		}
	}

	renderMovieGenre = () => {
		return this.props.movieData.genres.map((genre, index) => {
			if (index < 3) {
				return (
					<div key={genre.id} style={{ marginRight: 10, fontSize: '90%' }}>
						-{genre.name}
					</div>
				);
			}
		});
	};

	renderMoviePage = () => {
		if (!this.props.movieData.title) {
			history.push('/');
		} else {
			return (
				<div style={{ paddingTop: 140 }} className="ui container">
					<h1 className="moviePage-h1 animated fadeInDown" style={{ textAlign: 'center', marginBottom: 60 }}>
						{this.props.movieData.title} <br />
						<span style={{ fontSize: '55%' }}>
							<i>{this.props.movieData.tagline}</i>
						</span>
					</h1>
					<div className="ui">
						<div className="ui two column grid">
							<div className="column animated fadeInLeft" style={{ display: 'flex' }}>
								<img
									style={{ borderRadius: '10px', maxHeight: '675px', margin: '0 auto' }}
									src={`https://image.tmdb.org/t/p/w500/${this.props.movieData.poster_path}`}
								/>
							</div>
							<div className="column animated fadeInRight" style={{ marginTop: 10 }}>
								<div className="movie-div">
									<h4 className="movie-h4">
										Runtime:{' '}
										<span className="movie-span">
											{parseFloat(this.props.movieData.runtime / 60).toFixed(2)} hours
										</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Released:{' '}
										<span className="movie-span">{this.props.movieData.release_date}</span>
									</h4>
								</div>

								<div className="movie-div">
									<h4 className="movie-h4" style={{ display: 'flex' }}>
										Rating:{' '}
										<span className="movie-span">
											<RatingHearts />
										</span>
									</h4>
								</div>

								<div className="movie-div">
									<h4 className="movie-h4">
										Popularity:{' '}
										<span className="movie-span">
											{Math.round(this.props.movieData.popularity)}
											<i style={{ marginLeft: 5 }} className="ui orange fire icon" />
										</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4" style={{ display: 'flex' }}>
										Genre:{' '}
										<span className="movie-span" style={{ display: 'flex' }}>
											{this.renderMovieGenre()}
										</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Overview: <div className="movie-p">{this.props.movieData.overview}</div>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Budget:{' '}
										<span className="movie-span">
											<i className="ui green dollar icon" />
											{this.commafy(this.props.movieData.budget)}
										</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Revenue:{' '}
										<span className="movie-span">
											<i className="ui green dollar icon" />
											{this.commafy(this.props.movieData.revenue)}
										</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Profit: {this.profit(this.props.movieData.revenue, this.props.movieData.budget)}
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	render() {
		return <div className="moviePage-background">{this.renderMoviePage()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { movieData: state.movieData };
};

export default connect(mapStateToProps)(MoviePage);

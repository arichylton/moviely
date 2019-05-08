import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import RatingHearts from './RatingHearts';

import '../componentStyles/text.css';
import '../componentStyles/moviePage.css';

class MoviePage extends React.Component {
	renderMoviePage = () => {
		if (!this.props.movieData.title) {
			history.push('/');
		} else {
			return (
				<div style={{ paddingTop: 140 }} className="ui container ">
					<h1 className="moviePage-h1" style={{ textAlign: 'center', marginBottom: 60 }}>
						{this.props.movieData.title}
					</h1>
					<div className="ui">
						<div className="ui two column grid">
							<div className="column" style={{ display: 'flex' }}>
								<img
									style={{ borderRadius: '10px', maxHeight: '675px', margin: '0 auto' }}
									src={`https://image.tmdb.org/t/p/w500/${this.props.movieData.poster_path}`}
								/>
							</div>
							<div className="column" style={{ marginTop: 10 }}>
								<div>
									<h4 className="movie-h4 ">
										Title: <span className="movie-span">{this.props.movieData.title} </span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Released:{' '}
										<span className="movie-span">{this.props.movieData.release_date}</span>
									</h4>
								</div>
								<div className="movie-div">
									<h4 className="movie-h4">
										Runtime:{' '}
										<span className="movie-span">
											{parseFloat(this.props.movieData.runtime / 60).toFixed(2)} hours
										</span>
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
									<h4 className="movie-h4">
										Title: <span className="movie-span">{this.props.movieData.title}</span>
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
		return <div className="profile-background">{this.renderMoviePage()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { movieData: state.movieData };
};

export default connect(mapStateToProps)(MoviePage);

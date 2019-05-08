import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import '../componentStyles/text.css';

class MoviePage extends React.Component {
	componentDidMount() {
		if (!this.props.movieData.title) {
			history.push('/');
		}
	}

	renderMoviePage = () => {
		return (
			<div style={{ paddingTop: 140 }} className="ui container ">
				<h1 className="moviePage-h1" style={{ textAlign: 'center', marginBottom: 60 }}>
					{this.props.movieData.title}
				</h1>
				<div className="ui">
					<div className="ui two column grid">
						<div className="column">
							<img
								style={{ borderRadius: '10px' }}
								src={`https://image.tmdb.org/t/p/w500/${this.props.movieData.poster_path}`}
							/>
						</div>
						<div className="column" style={{ marginTop: 10 }}>
							<div>
								<h4 className="movie-h4 ">
									Title: <span className="movie-span">{this.props.movieData.title}</span>
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
	};

	render() {
		return <div>{this.renderMoviePage()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { movieData: state.movieData };
};

export default connect(mapStateToProps)(MoviePage);

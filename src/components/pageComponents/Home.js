import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import { featuredMovies, highestRatedMovies, latestMoviesData, loading, findMovie } from '../../actions';
import '../componentStyles/home.css';
import '../componentStyles/text.css';

class Home extends React.Component {
	componentDidMount() {
		window.scroll(0,0);
		this.props.featuredMovies();
		this.props.highestRatedMovies();
		this.props.latestMoviesData();
	}

	renderFeaturedList = () => {
		return this.props.featuredMoviesData.map((movie, index) => {
			if (index === 0) {
				return (
					<div key={movie.id}>
						<a onClick={() => this.props.findMovie(movie.id)}>
							{' '}
							<img
								className="home-image"
								src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
							/>
						</a>

						<div
							style={{
								position: 'absolute',
								top: '18%',
								left: '1.5%'
							}}
						>
							<div style={{ padding: '.6% 5%', margin: 'auto 40px', width: '100%' }}>
								<h1 className="home-h1">Movie Of The Week:</h1>
								<h1
									style={{
										color: 'white',
										fontSize: 30,
										letterSpacing: '2px',
										textShadow: 'black 1px 2px 3px'
									}}
								>
									{movie.title}
									{movie.name}
								</h1>
								<h4 style={{ textShadow: 'black 1px 2px 2px' }} className="crop-title">
									{movie.overview}
								</h4>
								<h4
									style={{
										color: 'white',
										margin: '5px 0',
										fontSize: 20,
										textShadow: 'black 1px 2px 2px'
									}}
								>
									<i className="ui star icon" /> {movie.vote_average}
								</h4>
							</div>
						</div>
					</div>
				);
			}
		});
	};

	renderFeaturedCarousel = () => {
		return this.props.featuredMoviesData.map((movie, index) => {
			return (
				<div style={{ padding: '0 1%' }} key={movie.id}>
					<h4 className="crop" style={{ margin: '20px auto', textAlign: 'center' }}>
						{movie.title}
					</h4>
					<a  onClick={() => this.props.findMovie(movie.id)}>
						<img
							style={{
								borderRadius: '10px',
								width: 180,
								height: 250,
								margin: 'auto',
								cursor: 'pointer'
							}}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						/>
					</a>
				</div>
			);
		});
	};

	renderLatestCarousel = () => {
		return this.props.latestMovies.map((movie, index) => {
			return (
				<div style={{ padding: '0 1%' }} key={movie.id}>
					<h4 className="crop" style={{ margin: '20px auto', textAlign: 'center' }}>
						{movie.title}
					</h4>
					<a onClick={() => this.props.findMovie(movie.id)}>
						<img
							style={{
								borderRadius: '10px',
								width: 180,
								height: 250,
								margin: 'auto',
								cursor: 'pointer'
							}}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						/>
					</a>
				</div>
			);
		});
	};

	renderHighestCarousel = () => {
		return this.props.highestRatedData.map((movie, index) => {
			return (
				<div style={{ padding: '0 1%' }} key={movie.id}>
					<h4 className="crop" style={{ margin: '20px auto', textAlign: 'center' }}>
						{movie.title}
					</h4>
					<a onClick={() => this.props.findMovie(movie.id)}>
						<img
							style={{
								borderRadius: '10px',
								width: 180,
								height: 250,
								margin: 'auto',
								cursor: 'pointer'
							}}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						/>
					</a>
				</div>
			);
		});
	};

	render() {
		const featuredSettings = {
			pauseOnHover: false,
			fade: true,
			arrows: false,
			draggable: false,
			autoplay: true,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		const responsive = [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		];

		const featuredCarouselSettings = {
			dots: true,
			draggable: false,
			infinite: true,
			autoplay: true,
			speed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive
		};

		const highestCarouselSettings = {
			dots: true,
			draggable: false,
			infinite: true,
			autoplay: true,
			speed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive
		};

		return (
			<div>
				<div className="ui item">
					{this.renderFeaturedList()}
				</div>
				<div className="ui container" style={{ margin: '160px 0' }}>
					<h2 style={{ textAlign: 'center', margin: '50px 0' }}>Featured Movies</h2>
					<Slider {...featuredCarouselSettings}>{this.renderFeaturedCarousel()}</Slider>
				</div>
				<div className="ui container" style={{ margin: '160px 0' }}>
					<h2 style={{ textAlign: 'center', margin: '50px 0' }}>Highest Rated Movies</h2>
					<Slider {...featuredCarouselSettings}>{this.renderHighestCarousel()}</Slider>
				</div>
				<div className="ui container" style={{ margin: '160px 0' }}>
					<h2 style={{ textAlign: 'center', margin: '50px 0' }}>Latest and Upcoming Movies</h2>
					<Slider {...highestCarouselSettings}>{this.renderLatestCarousel()}</Slider>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		featuredMoviesData: state.featuredMoviesData,
		highestRatedData: state.highestRatedData,
		latestMovies: state.latestMovies
	};
};

export default connect(mapStateToProps, { featuredMovies, highestRatedMovies, latestMoviesData, loading, findMovie })(Home);

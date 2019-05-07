import React from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';
import { featuredMovies } from '../../actions';

class Home extends React.Component {
	componentDidMount() {
		this.props.featuredMovies();
	}

	renderFeaturedList = () => {
		return this.props.featuredMoviesData.map((movie, index) => {
			if (index < 10) {
				return (
					<div style={{position: 'absolute'}} key={movie.id}>
						<img
							style={{
                                position: 'relative',
                                paddingTop: 75,
                                width: '100vw',
                                margin: 'auto'
							}}
							src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
						/>
                        <h1 className="ui container" style={{position:'absolute', top: '75%', left: '3%', fontSize: '30px'}}>{movie.title}<br /><i className="ui star icon"></i> {movie.vote_average}</h1>
					</div>
				);
			}
		});
	};

	render() {
		var settings = {
            fade: true,
            pauseOnHover: false,
            arrows: false,
            draggable: false,
            autoplay: true,
			infinite: true,
            speed: 1500,            
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div style={{ height: '100px'}} className="ui item">
				<Slider {...settings}>{this.renderFeaturedList()}</Slider>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { featuredMoviesData: state.featuredMoviesData };
};

export default connect(mapStateToProps, { featuredMovies })(Home);

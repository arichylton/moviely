import React from 'react';
import { connect } from 'react-redux';
import Breakpoint from 'react-socks';

import '../componentStyles/text.css';
import '../componentStyles/profile.css';

class SignIn extends React.Component {
	componentDidMount() {
		window.scroll(0, 0);
	}

	renderProfile() {
		if (!this.props.windowRoute.includes(`true`)) {
			return (
				<div>
					<h3
						style={{ textAlign: 'center', wordSpacing: '1px', paddingTop: 140 }}
						className="ui item animated slideInUp"
					>
						Please Sign In Through <span style={{ color: 'rgb(200, 50, 102)' }}>Get Auth Token</span>
					</h3>
				</div>
			);
		} else {
			return (
				<div>
					<Breakpoint large up>
						<div className="header-center animated slideInUp" style={{ marginTop: 80, marginLeft: '20%' }}>
							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui star icon" /> Favorite
									Movies
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>No favorite movies found</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui star icon" /> Favorite TV
									Shows
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>No favorite TV shows found</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui heart icon" /> Movie
									Ratings
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>Rate a movie</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui heart icon" /> TV Show
									Ratings
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>Rate a TV show</h5>
								</div>
							</div>
						</div>
					</Breakpoint>
					<Breakpoint medium down>
						<div className="header-center animated slideInUp" style={{ marginTop: 80 }}>
							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui star icon" /> Favorite
									Movies
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>No favorite movies found</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui star icon" /> Favorite TV
									Shows
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>No favorite TV shows found</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui heart icon" /> Movie
									Ratings
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>Rate a movie</h5>
								</div>
							</div>

							<div>
								<h2 className="ui item">
									<i style={{ marginRight: 4, fontSize: 22 }} className="ui heart icon" /> TV Show
									Ratings
								</h2>
								<div style={{ color: 'rgb(200, 50, 102)', margin: '100px auto' }}>
									<h5 style={{ letterSpacing: '1px' }}>Rate a TV show</h5>
								</div>
							</div>
						</div>
					</Breakpoint>
				</div>
			);
		}
	}

	renderLeftRail = () => {
		if (!this.props.windowRoute.includes(`true`)) {
			return null;
		} else {
			return (
				<div className="animated fadeIn">
					<div className="rail">
						<h3 className="textb" style={{ marginTop: 140 }}>
							User Stats
						</h3>
						<div className="ui colorb" style={{ marginTop: 240 }}>
							<h4 className="ui item">
								<i style={{ marginRight: 15, fontSize: 15 }} className="ui star icon" />
								<span style={{ color: 'rgb(200, 50, 102)', marginRight: 10 }}>0</span> Favorite Movies
							</h4>
						</div>
						<div className="ui colorb" style={{ marginTop: 400 }}>
							<h4 className="ui item">
								<i style={{ marginRight: 15, fontSize: 15 }} className="ui star icon" />
								<span style={{ color: 'rgb(200, 50, 102)', marginRight: 10 }}>0</span> Favorite TV Shows
							</h4>
						</div>
						<div className="ui colorb" style={{ marginTop: 560 }}>
							<h4 className="ui item">
								<i style={{ marginRight: 10, fontSize: 15 }} className="ui heart icon" />
								<span style={{ color: 'rgb(200, 50, 102)', marginRight: 10 }}>0</span> Rated Movies
							</h4>
						</div>
						<div className="ui colorb" style={{ marginTop: 720 }}>
							<h4 className="ui item">
								<i style={{ marginRight: 15, fontSize: 15 }} className="ui heart icon" />
								<span style={{ color: 'rgb(200, 50, 102)', marginRight: 10 }}>0</span>Rated TV Shows
							</h4>
						</div>
					</div>
				</div>
			);
		}
	};

	renderTitle = () => {
		if (!this.props.windowRoute.includes(`true`)) {
			return null;
		} else {
			return (
				<div>
					<Breakpoint large up>
						<div style={{ paddingTop: 140, marginLeft: '20%' }} className="animated slideInDown">
							<h3>User Profile</h3>
						</div>
					</Breakpoint>
					<Breakpoint medium down>
						<div style={{ paddingTop: 140 }} className="animated slideInDown">
							<h3>User Profile</h3>
						</div>
					</Breakpoint>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="profile-background " style={{ height: '100%' }}>
				<Breakpoint large up>
					{this.renderLeftRail()}
				</Breakpoint>
				{this.renderTitle()}
				<div>{this.renderProfile()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { guestSignInData: state.guestSignInData, windowRoute: state.windowRoute };
};

export default connect(mapStateToProps)(SignIn);

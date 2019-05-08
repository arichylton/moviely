import React from 'react';
import './componentStyles/text.css';
import { connect } from 'react-redux';
import { requestAuthToken, signOut, guestSignIn, route } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import './componentStyles/text.css';

class Header extends React.Component {

	componentDidMount() {
		if (window.location.href.includes('true')) {
			this.props.route(window.location.href);
		}
	}

	onSignInClick = () => {
		if (!window.location.href.includes(`true`) && !this.props.guestSignInData.success) {
			this.props.requestAuthToken();
		} else {
			this.props.signOut();
		}
	};

	renderProfileButton = () => {
		if (window.location.href.includes('true')) {
			return (
				<Link to="/profile" className="ui item">
					<button className="ui button primary">Profile</button>
				</Link>
			);
		} else {
			return (
				<Link to="/profile/guest" className="ui item">
					<button className="ui button">Guest Profile</button>
				</Link>
			);
		}
	};

	renderButtons = () => {
		if (window.location.href.includes(`true`) || this.props.guestSignInData.success) {
			return (
				<div style={{ display: 'flex' }}>
					{this.renderProfileButton()}
					<Link to="/" className="ui item">
						<button className="ui red inverted button" onClick={this.props.signOut}>
							Sign Out
						</button>
					</Link>
				</div>
			);
		} else if (!this.props.isSignedIn.success) {
			return (
				<div style={{ display: 'flex' }}>
					<a style={{ color: 'white' }} className="ui item">
						<button onClick={this.onSignInClick} className="ui button inverted primary">
							{' '}
							Get Auth Token
						</button>
					</a>
					<a className="ui item">
						<button className="ui button inverted grey" onClick={() => this.props.guestSignIn()}>
							Sign in as Guest
						</button>
					</a>
				</div>
			);
		} else if (this.props.isSignedIn.success) {
			return (
				<div className="ui item">
					<a
						href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn
							.request_token}?redirect_to=http://localhost:3000/`}
					>
						<button className="ui button blue">Sign In with MovieDB</button>
					</a>
				</div>
			);
		}
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					padding: '5px 0',
					backgroundImage: 'linear-gradient(to bottom right, rgba(13, 30, 51.9), rgba(20, 13, 51, 0.85))',
					boxShadow: '0 2px 2px rgb(13, 30, 51, .2)'
				}}
				className="ui fixed menu"
			>
				<div style={{ display: 'flex', width: '100%', margin: '0 4%' }}>
					<div style={{ display: 'flex', flex: '0 1 auto' }}>
						<Link
							to="/"
							onClick={() =>
								window.scrollTo({
									top: 0,
									behavior: 'smooth'
								})}
							style={{ color: 'white' }}
							className="item grow"
						>
							<h1>
								<i className="ui movie icon" /> Moviely
							</h1>
						</Link>
						<a
							style={{ color: 'white' }}
							className="item grow"
							onClick={() =>
								window.scrollTo({
									top: 1000,
									behavior: 'smooth'
								})}
						>
							Featured
						</a>
						<a
							style={{ color: 'white' }}
							className="item grow"
							onClick={() =>
								window.scrollTo({
									top: 1600,
									behavior: 'smooth'
								})}
						>
							Highest Rated
						</a>
						<div className="item" />
					</div>

					<div style={{ flex: '1 0 auto' }}>
						<SearchBar />
					</div>

					<div className="right menu" style={{ flex: '1 0 auto', maxWidth: 400 }}>
						<div className="item" />
						{this.renderButtons()}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.isSignedIn,
		guestSignInData: state.guestSignInData
	};
};

export default connect(mapStateToProps, { requestAuthToken, signOut, guestSignIn, route })(Header);

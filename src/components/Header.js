import React from 'react';
import './componentStyles/text.css';
import { connect } from 'react-redux';
import { requestAuthToken, signOut, guestSignIn } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends React.Component {
	onSignInClick = () => {
		if (!window.location.href.includes(`true`) && !this.props.guestSignInData.success) {
			this.props.requestAuthToken();
		} else {
			this.props.signOut();
		}
	};

	renderButtons = () => {
		if (window.location.href.includes(`true`) || this.props.guestSignInData.success) {
			return (
				<div className="ui item">
					<a href="/">
						<button className="ui button negative" onClick={this.onSignInClick}>
							Sign Out
						</button>
					</a>
				</div>
			);
		} else if (!this.props.isSignedIn.success) {
			return (
				<div style={{ display: 'flex' }}>
					<a style={{ color: 'white' }} className="ui item">
						<button onClick={this.onSignInClick} className="ui button primary">
							{' '}
							Get Auth Token
						</button>
					</a>
					<a className="ui item">
						<button className="ui button grey" onClick={() => this.props.guestSignIn()}>
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
					backgroundColor: 'rgb(17, 38, 66)',
					boxShadow: '0 2px 2px rgb(13, 30, 51, .2)'
				}}
				className="ui fixed menu"
			>
				<div style={{ display: 'flex', width: '100%', margin: '0 4%' }}>
					<div style={{ display: 'flex' }}>
						<a style={{ color: 'white' }} className="active item" href="#">
							<h1>
								<i className="ui movie icon" /> Moviely
							</h1>
						</a>
						<a style={{ color: 'white' }} className="item" href="#">
							Messages
						</a>
						<a style={{ color: 'white' }} className="item" href="#">
							Friends
						</a>
						<div className="item" />
					</div>

					<div style={{ flex: 'auto' }}>
						<SearchBar />
					</div>

					<div className="right menu">
						<div className="item" />
						{this.renderButtons()}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.isSignedIn, guestSignInData: state.guestSignInData };
};

export default connect(mapStateToProps, { requestAuthToken, signOut, guestSignIn })(Header);

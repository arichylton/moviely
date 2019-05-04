import React from 'react';
import './componentStyles/text.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import SearchBar from './SearchBar';

class Header extends React.Component {
	onSignInClick = () => {
		if (!window.location.href.includes(`true`)) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	renderButton = () => {
		

		if (!this.props.isSignedIn.success && !window.location.href.includes(`true`)) {
			return (
				<a style={{ color: 'white' }} className="ui item">
					<button onClick={this.onSignInClick} className="ui button primary">
						{' '}
						Get Auth Token
					</button>
				</a>
			);
		} else if (this.props.isSignedIn.success) {
			return (
				<div className="ui item">
					<a
						href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn
							.request_token}?redirect_to=https://aric-hylton-moviely.herokuapp.com/`}
					>
						<button className="ui button blue">Sign In with MovieDB</button>
					</a>
				</div>
			);
		} else {
			return (
				<div className="ui item">
					<a href="/">
						<button className="ui button negative" onClick={this.onSignInClick}>
							Sign Out
						</button>
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
				<div className="ui container">
					<a style={{ color: 'white' }} className="active item" href="#">
						Home
					</a>
					<a style={{ color: 'white' }} className="item" href="#">
						Messages
					</a>
					<a style={{ color: 'white' }} className="item" href="#">
						Friends
					</a>
					<SearchBar />
					<div className="right menu">
						<div className="item" />
						{this.renderButton()}
						<a className="ui item">
							<button className="ui button">Sign in as Guest</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);

import React from 'react';
import './componentStyles/text.css';
import { connect } from 'react-redux';
import { requestAuthToken, signOut, guestSignIn, route } from '../actions';
import { Link } from 'react-router-dom';
import Breakpoint from 'react-socks';
import SearchModal from './pageComponents/SearchModal';

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
					<Breakpoint large up>
						<button className="ui button primary">Profile</button>
					</Breakpoint>
					<Breakpoint medium down>
						<i
							className="ui user icon grow"
							style={{ color: '#54c8ff', fontSize: '250%', marginLeft: 15 }}
						/>
					</Breakpoint>
				</Link>
			);
		} else {
			return (
				<Link to="/profile/guest" className="ui item">
					<Breakpoint large up>
						<button className="ui button">Guest Profile</button>
					</Breakpoint>
					<Breakpoint medium down>
						<i
							className="user circle outline icon grow"
							style={{ color: 'rgb(218, 218, 218)', fontSize: '250%', marginLeft: 15 }}
						/>
					</Breakpoint>
				</Link>
			);
		}
	};

	renderButtons = () => {
		if (window.location.href.includes(`true`) || this.props.guestSignInData.success) {
			return (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{this.renderProfileButton()}
					<Link to="/" className="ui item">
						<Breakpoint large up>
							<button className="ui red inverted button" onClick={this.props.signOut}>
								Sign Out
							</button>
						</Breakpoint>
						<Breakpoint medium down>
							<i
								onClick={this.props.signOut}
								className="user x icon grow"
								style={{ color: '#ff695e', fontSize: '250%' }}
							/>
						</Breakpoint>
					</Link>
				</div>
			);
		} else if (!this.props.isSignedIn.success) {
			return (
				<div>
					<Breakpoint large up>
						<div style={{ display: 'flex' }}>
							<span style={{ color: 'white' }} className="ui item">
								<button onClick={this.onSignInClick} className="ui button inverted primary">
									{' '}
									Get Auth Token
								</button>
							</span>
							<span href="/#" className="ui item">
								<button className="ui button inverted grey" onClick={() => this.props.guestSignIn()}>
									Sign in as Guest
								</button>
							</span>
						</div>
					</Breakpoint>
					<Breakpoint medium down>
						<div style={{ display: 'flex' }}>
							<a href="/#" style={{ color: 'white' }} className="ui item grow">
								<i
									onClick={this.onSignInClick}
									style={{ color: '#54c8ff', fontSize: '250%', marginLeft: 15 }}
									className="ui key icon"
								/>
							</a>
							<a href="/#" className="ui item" style={{ padding: '0 5% 0 0' }}>
								<i
									className="user circle outline icon grow"
									style={{ color: 'rgb(218, 218, 218)', fontSize: '250%' }}
									onClick={() => this.props.guestSignIn()}
								/>
							</a>
						</div>
					</Breakpoint>
				</div>
			);
		} else if (this.props.isSignedIn.success) {
			return (
				<div>
					<Breakpoint large up>
						<div className="ui item">
							<a
								href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn
									.request_token}?redirect_to=http://localhost:3000/`}
							>
								<button className="ui button blue">Sign In with MovieDB</button>
							</a>
						</div>
					</Breakpoint>
					<Breakpoint medium down>
						<div className="ui item grow" style={{marginBottom: 5}}>
							<a
								href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn
									.request_token}?redirect_to=http://localhost:3000/`}
							>
								<i
									className="user outline icon"
									style={{ color: '#54c8ff', fontSize: '250%', marginLeft: 15}}
								/>
							</a>
						</div>
					</Breakpoint>
				</div>
			);
		}
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					backgroundImage: 'linear-gradient(to bottom right, rgba(13, 30, 51.9), rgba(20, 13, 51, 0.85))',
					boxShadow: '0 2px 2px rgb(13, 30, 51, .2)'
				}}
				className="ui fixed menu"
			>
				<div style={{ display: 'flex', width: '100%', margin: '0 4%', alignItems: 'center' }}>
					<div style={{ display: 'flex', flex: '0 1 auto', alignItems: 'center' }}>
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
							<h1>Moviely</h1>
						</Link>
						<Breakpoint large up>
							<div className="ui item">
								<span	
									
									style={{ color: 'white', cursor: 'pointer' }}
									className="item grow"
									onClick={() =>
										window.scrollTo({
											top: 1000,
											behavior: 'smooth'
										})}
								>
									Featured
								</span>

								<span								
									style={{ color: 'white', cursor: 'pointer' }}
									className="item grow"
									onClick={() =>
										window.scrollTo({
											top: 1600,
											behavior: 'smooth'
										})}
								>
									Highest Rated
								</span>
							</div>
						</Breakpoint>
						<div className="item" />
					</div>

					<div style={{ flex: 'auto' }}>
						<Breakpoint medium up>
							<SearchBar />
						</Breakpoint>
					</div>

					<div className="right menu" style={{ display: 'flex', maxWidth: 400, alignItems: 'center' }}>
						<Breakpoint small down>
							<SearchModal />
						</Breakpoint>

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

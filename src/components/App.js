import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import MovieSearchList from './MovieSearchList';
import GuestSignIn from './pageComponents/GuestSignIn'
import SignIn from './pageComponents/SignIn'
import history from '../history';

import './componentStyles/app.css';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<Header />
				<div>
					<Switch>
						<Route path="/search" exact component={MovieSearchList} />
						<Route path="/profile/guest" exact component={GuestSignIn} />
						<Route path="/profile" exact component={SignIn} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

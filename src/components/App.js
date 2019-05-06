import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import MovieSearchList from './MovieSearchList';

import './componentStyles/app.css';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<div>
					<Switch>
						<Route path="/search" exact component={MovieSearchList} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

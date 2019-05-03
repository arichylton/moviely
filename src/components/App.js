import React from 'react';
import Header from './Header';
import MovieSearchList from './MovieSearchList';

import './componentStyles/app.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MovieSearchList />
			</div>
		);
	};
}

export default App
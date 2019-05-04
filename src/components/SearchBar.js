import React from 'react';
import { searchMovies, loading } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.loading(true);
		this.props.searchMovies(this.state.term);
	};

	render() {
		return (
			<form
				className="ui form inverted item"
				style={{ flex: '1', maxWidth: '800px' }}
				onSubmit={this.onFormSubmit}
			>
				<input
					value={this.state.term}
					onChange={(e) => this.setState({ term: e.target.value })}
					required
					type="text"
					placeholder="Search..."
				/>
			</form>
		);
	}
}

export default connect(null, { searchMovies, loading })(SearchBar);

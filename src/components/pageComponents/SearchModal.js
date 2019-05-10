import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import { Header, Modal } from 'semantic-ui-react';

export default class SearchModal extends Component {
	state = { modalOpen: false };

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return (
			<Modal
				trigger={
					<i
						onClick={this.handleOpen}
						className="ui search icon grow"
						style={{ cursor: 'pointer', fontSize: '225%', display: 'flex', alignItems: 'center' }}
					/>
				}
				basic
				size="small"
				centered={false}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				onSubmit={this.handleClose}
			>
				<Header icon="film" content="Search for cool movies" />

				<Modal.Actions>
					<SearchBar />
				</Modal.Actions>
			</Modal>
		);
	}
}

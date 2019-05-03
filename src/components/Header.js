import React from 'react';
import './componentStyles/text.css'

class Header extends React.Component {
	render() {
		return (
			<div style ={{padding: '5px 0', backgroundColor: 'rgb(17, 38, 66)', boxShadow: '0 2px 2px rgb(13, 30, 51, .2)'}} className="ui fixed menu">
				<div className="ui container">
					<a style={{color: 'white'}} className="active item" href="#">Home</a>
					<a style={{color: 'white'}} className="item" href="#">Messages</a>
					<a style={{color: 'white'}} className="item" href="#">Friends</a>
					<div className="right menu">
						<div className="item">
							<div className="ui icon input">
								<input type="text" placeholder="Search..." />
								<i className="search link icon" />
							</div>
						</div>
						<a style={{color: 'white'}} className="ui item" href="#"><button className="ui button primary">Log In
							</button></a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

import React from 'react';
import './componentStyles/footer.css';
import Breakpoint from 'react-socks';

const attributionImage = require('../pics/the-movie-db.png');

class Footer extends React.Component {
	render() {
		return (
			<div
				className="footer-background"
				style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<Breakpoint medium up>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div style={{ display: 'flex', alignItems: 'center', width: 450, marginRight: 100 }}>
							<img style={{ height: 100, width: 'auto' }} src={attributionImage} />
							<div style={{ marginLeft: 50 }}>
								<h4 style={{ wordSpacing: 2, letterSpacing: 1 }}>
									{' '}
									Made with <ion-icon name="heart" style={{ color: 'red' }} /> by Aric Hylton &copy;
									2019
								</h4>
							</div>
						</div>
					</div>
				</Breakpoint>
				<Breakpoint small down>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div style={{ display: 'flex', alignItems: 'center', width: 450, marginLeft: 25 }}>
							<img style={{ height: 100, width: 'auto' }} src={attributionImage} />
							<div style={{marginLeft: 25}}>
								<h4 style={{ wordSpacing: 2, letterSpacing: 1 }}>
									{' '}
									Made with <ion-icon name="heart" style={{ color: 'red' }} /> by Aric Hylton &copy;
									2019
								</h4>
							</div>
						</div>
					</div>
				</Breakpoint>
			</div>
		);
	}
}

export default Footer;

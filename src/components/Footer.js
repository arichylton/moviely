import React from 'react';
import './componentStyles/footer.css';
import Breakpoint from 'react-socks';

const attributionImage = require('../pics/the-movie-db.png');

class Footer extends React.Component {
  render() {
    return (
      <div
        className='footer-background'
        style={{
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
					width: '100vw',
        }}
      >
        <Breakpoint medium up>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: 450,
              }}
            >
              <img
                alt='movie-db-pic'
                style={{ height: 80, width: 'auto' }}
                src={attributionImage}
              />
              <div>
                <h4 style={{ wordSpacing: 2, letterSpacing: 1, marginLeft: '25px' }}>
                  {' '}
                  Made with <ion-icon
                    name='heart'
                    style={{ color: 'red' }}
                  />{' '}
                  by Aric Hylton &copy; 2022
                </h4>
              </div>
            </div>
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img
                alt='movie-db-pic'
                style={{ height: 60, width: 'auto' }}
                src={attributionImage}
              />
              <div style={{ marginLeft: 25 }}>
                <h4 style={{ wordSpacing: 2, letterSpacing: 1 }}>
                  {' '}
                  Made with <ion-icon
                    name='heart'
                    style={{ color: 'red' }}
                  />{' '}
                  by Aric Hylton &copy; 2022
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

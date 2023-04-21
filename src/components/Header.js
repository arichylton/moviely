import React from 'react';
import './componentStyles/text.css';
import { connect } from 'react-redux';
import { requestAuthToken, signOut, guestSignIn, route } from '../actions';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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

  componentWillUnmount() {
    window.location = '/';
  }

  onSignInClick = () => {
    if (
      !window.location.href.includes(`true`) &&
      !this.props.guestSignInData.success
    ) {
      this.props.requestAuthToken();
    } else {
      this.props.signOut();
    }
  };

  renderProfileButton = () => {
    if (window.location.href.includes('true')) {
      return (
        <Link to='/profile' className='ui item'>
          <Breakpoint large up>
            <button className='ui button primary'>Profile</button>
          </Breakpoint>
          <Breakpoint medium only>
            <i
              className='ui user icon grow'
              style={{ color: '#54c8ff', fontSize: '200%', marginLeft: 15 }}
            />
          </Breakpoint>
          <Breakpoint small down>
            <i
              className='ui user icon grow'
              style={{ color: '#54c8ff', fontSize: '200%', marginLeft: 15 }}
            />
          </Breakpoint>
        </Link>
      );
    } else {
      return (
        <Link to='/profile/guest' className='ui item'>
          <Breakpoint large up>
            <button className='ui button'>Guest Profile</button>
          </Breakpoint>
          <Breakpoint medium only>
            <i
              className='user circle outline icon grow'
              style={{
                color: 'rgb(218, 218, 218)',
                fontSize: '200%',
                marginLeft: '5%',
              }}
            />
          </Breakpoint>
          <Breakpoint small only>
            <i
              className='user circle outline icon grow'
              style={{
                color: 'rgb(218, 218, 218)',
                fontSize: '200%',
                marginLeft: '5%',
              }}
            />
          </Breakpoint>
          <Breakpoint xsmall down>
            <i
              className='user circle outline icon grow'
              style={{
                color: 'rgb(218, 218, 218)',
                fontSize: '200%',
                marginLeft: '5%',
              }}
            />
          </Breakpoint>
        </Link>
      );
    }
  };

  renderButtons = () => {
    if (
      window.location.href.includes(`true`) ||
      this.props.guestSignInData.success
    ) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {this.renderProfileButton()}
          <Link to='/' className='ui item'>
            <Breakpoint large up>
              <button
                className='ui red inverted button'
                onClick={this.props.signOut}
              >
                Sign Out
              </button>
            </Breakpoint>
            <Breakpoint medium down>
              <i
                onClick={this.props.signOut}
                className='user x icon grow'
                style={{ color: '#ff695e', fontSize: '200%' }}
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
              <span style={{ color: 'white' }} className='ui item'>
                <button
                  onClick={this.onSignInClick}
                  className='ui button inverted primary'
                >
                  {' '}
                  Get Auth Token
                </button>
              </span>
              <span href='/#' className='ui item'>
                <button
                  className='ui button inverted grey'
                  onClick={() => this.props.guestSignIn()}
                >
                  Sign in as Guest
                </button>
              </span>
            </div>
          </Breakpoint>
          <Breakpoint medium down>
            <div style={{ display: 'flex' }}>
              <a href='/#' style={{ color: 'white' }} className='ui item grow'>
                <i
                  onClick={this.onSignInClick}
                  style={{ color: '#54c8ff', fontSize: '200%', marginLeft: 15 }}
                  className='ui key icon'
                />
              </a>
              <a href='/#' className='ui item' style={{ padding: '0 5% 0 0' }}>
                <i
                  className='user circle outline icon grow'
                  style={{ color: 'rgb(218, 218, 218)', fontSize: '200%' }}
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
            <div className='ui item'>
              <a
                href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn.request_token}?redirect_to=https://moviely-app.netlify.app/`}
              >
                <button className='ui button blue'>Sign In with MovieDB</button>
              </a>
            </div>
          </Breakpoint>
          <Breakpoint medium down>
            <div className='ui item grow' style={{ marginBottom: 5 }}>
              <a
                href={`https://www.themoviedb.org/authenticate/${this.props.isSignedIn.request_token}?redirect_to=https://moviely-app.netlify.app/`}
              >
                <i
                  className='user outline icon'
                  style={{ color: '#54c8ff', fontSize: '200%', marginLeft: 15 }}
                />
              </a>
            </div>
          </Breakpoint>
        </div>
      );
    }
  };

  scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -130;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100vw',
          backgroundImage:
            'linear-gradient(to bottom right, rgba(13, 30, 51.9), rgba(20, 13, 51, 0.85))',
          boxShadow: '0 2px 2px rgb(13, 30, 51, .2)',
        }}
        className='ui fixed menu'
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '0 2%',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HashLink
              to='/#'
              scroll={(el) => this.scrollWithOffset(el)}
              style={{ color: 'white', cursor: 'pointer' }}
              className='item grow'
            >
              <h1>Moviely</h1>
            </HashLink>
            <Breakpoint large up>
              <div className='ui item'>
                <HashLink
                  to='/#featured'
                  scroll={(el) => this.scrollWithOffset(el)}
                  style={{ color: 'white', cursor: 'pointer' }}
                  className='item grow'
                >
                  Featured
                </HashLink>

                <HashLink
                  to='/#highest'
                  scroll={(el) => this.scrollWithOffset(el)}
                  style={{ color: 'white', cursor: 'pointer' }}
                  className='item grow'
                >
                  Highest Rated
                </HashLink>
              </div>
            </Breakpoint>
            <div className='item' />
          </div>

          <div style={{ flex: 'auto' }}>
            <Breakpoint medium up>
              <SearchBar />
            </Breakpoint>
          </div>

          <div
            className='right menu'
            style={{ display: 'flex', alignItems: 'center' }}
          >
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
    guestSignInData: state.guestSignInData,
  };
};

export default connect(mapStateToProps, {
  requestAuthToken,
  signOut,
  guestSignIn,
  route,
})(Header);

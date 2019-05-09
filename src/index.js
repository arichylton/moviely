import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { BreakpointProvider } from 'react-socks';

import App from './components/App';
import reducers from './reducers';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
	<Provider store={store}>
		<BreakpointProvider>		
			<App />
		</BreakpointProvider>
	</Provider>,
	document.querySelector('#root')
);

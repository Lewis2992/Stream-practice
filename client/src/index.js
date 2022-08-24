import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

root.render(
	<Provider store={store}>
		<App/>	
	</Provider>
);
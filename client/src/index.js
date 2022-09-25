import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

import reducers from './reducers';
import App from './components/App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
	key:'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store)

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App/>
		</PersistGate>
	</Provider>
);
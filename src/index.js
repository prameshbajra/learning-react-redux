import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productsReducer } from './reducers/product-reducers';
import { usersReducer } from './reducers/user-reducers';

const store = createStore(combineReducers({
    products: productsReducer,
    users: usersReducer
}), window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        < App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './config/Store';
import './css/index.css';
import RouteComponent from './components/RouteComponent';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <RouteComponent />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import RouteComponent from './components/RouteComponent';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <RouteComponent />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

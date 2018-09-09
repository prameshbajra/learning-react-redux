import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../css/App.css';
import LayoutComponent from './LayoutComponent';
import HomePage from './HomePage';
import NavigationComponent from './NavigationComponent';

const RouteComponent = () => (
    <div>
        <NavigationComponent />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Cart" component={LayoutComponent} />
        </Switch>
    </div>
);

export default RouteComponent;

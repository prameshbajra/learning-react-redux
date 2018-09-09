import React, { Component } from 'react';

import '../css/App.css';
import LayoutComponent from './LayoutComponent';
import NavigationComponent from './NavigationComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationComponent />
                <LayoutComponent />
            </div>
        );
    }
}

export default App;

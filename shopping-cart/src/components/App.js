import React, { Component } from 'react';

import '../css/App.css';
import LayoutComponent from './Layout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LayoutComponent />
            </div>
        );
    }
}

export default App;

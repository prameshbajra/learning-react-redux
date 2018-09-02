import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar></NavBar>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

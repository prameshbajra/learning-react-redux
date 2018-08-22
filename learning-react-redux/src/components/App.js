import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import Posts from './Posts';
import PostForm from './PostForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Pramesh Bajra
                </p>
                <PostForm />
                <hr />
                <Posts />

            </div>
        );
    }
}

export default App;

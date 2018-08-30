import React, { Component } from 'react';
import '../css/App.css';

import Show from './Show';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                name: "Pramesh",
                age: "Bajracharya"
            }]
        }
    }

    addData = (data) => {
        this.setState({ data: [...this.state.data, data] });
    }

    render() {
        return (
            <div>
                <Show data={this.state.data} />
                <Form addData={this.addData} />
            </div>
        )
    }
}

export default App;

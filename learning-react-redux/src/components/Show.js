import React, { Component } from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data.map((detail) => {
            return (
                <div key={Math.random()}>
                    <p>{detail.name}</p>
                    <small>{detail.age}</small>
                </div>
            )
        })
        return (
            <div className="App">
                {data}
            </div>
        );
    }
}

export default Show;

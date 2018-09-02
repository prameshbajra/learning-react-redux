import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    onClickHandler = () => {
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>Contact US</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit, asperiores quisquam eum ducimus quasi vitae minima enim nostrum dolorem officiis, natus ipsum, iure voluptatem hic. Fugit dolore adipisci ipsa!
            <button onClick={this.onClickHandler}>Go To Home Page</button>
            </div>
        );
    }
}

export default Contact;

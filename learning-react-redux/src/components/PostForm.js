import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    // Making a common change handler for chaneg event ...
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.title
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <div>
                <hr />
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" name="title" onChange={this.onChangeHandler} value={this.state.title} /><br />
                    <textarea cols="30" rows="10" name="body" onChange={this.onChangeHandler} value={this.state.body}></textarea><br />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;

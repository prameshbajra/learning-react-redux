import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addData({
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" name="name" onChange={this.onChangeHandler} />
                    <input type="number" name="age" onChange={this.onChangeHandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;

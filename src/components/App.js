import React, { Component } from 'react';
import '../css/App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../actions/users-action';
import { updateProduct } from '../actions/products-action';

class App extends Component {
    updateUser = () => {
        console.log("Pramesh");
        this.props.onUpdateUser('Pramesh');
        this.props.onUpdateProduct('Suzal Bajra');
    }
    render() {
        return (
            <div className="App">
                <br />
                {this.props.products}
                <br />
                {this.props.users}
                <div onClick={this.updateUser}>Update user</div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        users: state.users
    }
}

const mapActionToProps = (dispatch, props) => {
    return bindActionCreators({
        onUpdateUser: updateUser,
        onUpdateProduct: updateProduct
    }, dispatch)
}

export default connect(mapStateToProps, mapActionToProps)(App);

import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { connect } from 'react-redux';

import CardComponent from './CardComponent';
const { Content } = Layout;

class HomePage extends Component {
    state = {
        items: [
            {
                item_name: "Pramesh",
                item_price: 10,
                item_description: "This is a simple redux application."
            },
            {
                item_name: "Susis",
                item_price: 100,
                item_description: "This is another simple redux application."
            }
        ]
    }
    render() {
        return (
            <div>
                <Content style={{ padding: '0px 50px' }}>
                    <Row gutter={16}>
                        {this.state.items.map((item) =>
                            <Col span={6} key={item.item_name}>
                                <CardComponent item={item} addToCart={this.props.addToCart(item)} />
                            </Col>
                        )}
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({ type: 'add_item', item: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'remove_item', item: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



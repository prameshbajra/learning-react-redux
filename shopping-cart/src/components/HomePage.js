import React from 'react';
import { Layout, Row, Col } from 'antd';
import { connect } from 'react-redux';
import data from '../seeds/products.json';

import CardComponent from './CardComponent';
import { add_item, remove_item } from '../config/Actions';
const { Content } = Layout;

const HomePage = (props) => {
    return (
        <div>
            <Content style={{ padding: '0px 50px' }}>
                <Row gutter={16}>
                    {data.products.map((item) =>
                        <Col span={6} key={item.id}>
                            <CardComponent item={item} addToCart={props.addToCart} />
                        </Col>
                    )}
                </Row>
            </Content>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(add_item(item))
        },
        removeFromCart: (item) => {
            dispatch(remove_item(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



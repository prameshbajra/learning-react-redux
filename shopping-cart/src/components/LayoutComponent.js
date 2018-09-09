import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';

import CardComponent from './CardComponent';

const { Content } = Layout;

class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '34px 50px' }}>
                    <Row gutter={16}>
                        <Col span={6} >
                            <CardComponent />
                        </Col>
                        <Col span={6} >
                            <CardComponent />
                        </Col>
                        <Col span={6} >
                            <CardComponent />
                        </Col>
                        <Col span={6} >
                            <CardComponent />
                        </Col>
                        <Col span={1}>
                        </Col>
                    </Row>
                </Content>
            </div>
        );
    }
}

export default LayoutComponent;
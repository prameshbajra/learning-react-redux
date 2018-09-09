import React, { Component } from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Content style={{ padding: '50px 50px' }}>
                Home Page
            </Content>
        );
    }
}

export default HomePage;

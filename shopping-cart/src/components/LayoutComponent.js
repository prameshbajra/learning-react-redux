import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class LayoutComponent extends Component {

    render() {
        return (
            <div>
                <Content style={{ padding: '34px 50px' }}>
                    KArt ma huney kura
                </Content>
            </div>
        );
    }
}


export default LayoutComponent;
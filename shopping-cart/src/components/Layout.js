import React, { Component } from 'react';
import { Layout, Sider, Header, Content, Footer } from 'antd';

class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}



export default LayoutComponent;
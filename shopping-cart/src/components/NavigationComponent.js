import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavigationComponent extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
            >
                <Menu.Item key="bank">
                    <Icon type="bank" />
                    Home
                </Menu.Item>
                <Menu.Item key="shopping">
                    <Icon type="shopping" />
                    My Cart
                </Menu.Item>
                <Menu.Item key="alipay" style={{ float: 'right' }}>
                    <a href="http://prameshbajra.github.io" target="_blank" rel="noopener noreferrer">About Me</a>
                </Menu.Item>
            </Menu>
        );
    }
}


export default NavigationComponent;
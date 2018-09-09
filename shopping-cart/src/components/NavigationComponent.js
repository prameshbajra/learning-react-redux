import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

class NavigationComponent extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
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
            >
                <Menu.Item key="bank">
                    <NavLink to="/">
                        <Icon type="bank" />
                        Home
                     </NavLink>
                </Menu.Item>
                <Menu.Item key="shopping">
                    <NavLink to="/cart">
                        <Icon type="shopping" />
                        My Cart
                       </NavLink>
                </Menu.Item>
                <Menu.Item key="alipay" style={{ float: 'right' }}>
                    <a href="http://prameshbajra.github.io" target="_blank" rel="noopener noreferrer">
                        <Icon type="idcard" />
                        About Me
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}


export default NavigationComponent;
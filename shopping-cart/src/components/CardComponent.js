import React, { Component } from 'react';
import { Skeleton, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class CardComponent extends Component {
    state = {
        loading: false,
    }

    onChange = () => {
        this.setState({ loading: !this.state.loading });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                <Card
                    style={{ width: 300, marginTop: 50 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[
                        <div onClick={() => this.props.addToCart(this.props.item)} >
                            <Icon type="plus-circle" /> Add item to cart
                        </div>
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://prameshbajra.github.io/static/assets/img/landing/pramesh.png" />}
                            title={this.props.item.item_name}
                            description={this.props.item.item_description}
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

export default CardComponent;